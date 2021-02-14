import * as crypto from 'crypto';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisCacheService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  generateCacheKey(url) {
    return crypto.createHmac('sha256', url).digest('hex');
  }

  async get<T>(key): Promise<T> {
    return await this.cache.get<T>(key);
  }

  async set(key, value) {
    await this.cache.set(key, value);
  }

  async reset() {
    await this.cache.reset();
  }

  async del(key) {
    await this.cache.del(key);
  }
}
