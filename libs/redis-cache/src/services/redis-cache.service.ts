import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
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

  private generateCacheKey(url: string) {
    return crypto.createHmac('sha256', url).digest('hex');
  }

  async fromUrl<T>(url: string): Promise<IRedisCacheData<T>> {
    const cached = await this.get<T>(url);
    if (cached && cached.expired > Date.now()) {
      return cached;
    }
    const res = (await axios.get<T>(url)).data;
    return this.set(url, res);
  }

  async get<T>(url: string): Promise<IRedisCacheData<T>> {
    const key = this.generateCacheKey(url);
    return await this.cache.get<IRedisCacheData<T>>(key);
  }

  async set<T>(url: string, value: T, expiredInMs = CacheExpired.ExpiredIn1Hour): Promise<IRedisCacheData<T>> {
    const key = this.generateCacheKey(url);
    const now = Date.now();
    const data = {
      created: now,
      expired: now + expiredInMs,
      result: value,
    };
    this.cache.set(key, data);
    return data;
  }

  async reset() {
    await this.cache.reset();
  }

  async delFromUrl(url: string) {
    await this.del(this.generateCacheKey(url));
  }

  async del(key: string) {
    await this.cache.del(key);
  }
}
