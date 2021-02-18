import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { Cache } from 'cache-manager';

const CacheExpired = {
  ExpiredIn1Minute: 60000,
  ExpiredIn1Hour: 3600000,
  ExpiredIn1Day: 86400000,
};

export interface IRedisCacheData<T> {
  created: number;
  expired: number;
  result: T
}

@Injectable()
export class RedisCacheService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  private generateCacheKey(url) {
    return crypto.createHmac('sha256', url).digest('hex');
  }

  async get<T>(url): Promise<IRedisCacheData<T>> {
    const key = this.generateCacheKey(url);
    return await this.cache.get<IRedisCacheData<T>>(key);
  }

  async set(url, value, expiredInMs = CacheExpired.ExpiredIn1Hour) {
    const key = this.generateCacheKey(url);
    const now = Date.now();
    const data = {
      created: now,
      expired: now + expiredInMs,
      result: value,
    };
    await this.cache.set(key, data);
  }

  async reset() {
    await this.cache.reset();
  }

  async del(url) {
    const key = this.generateCacheKey(url);
    await this.cache.del(key);
  }
}
