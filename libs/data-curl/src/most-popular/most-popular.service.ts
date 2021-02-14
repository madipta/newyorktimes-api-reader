import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { RedisCacheService } from '@base/redis-cache';
import { IMostPopularRoot, MostPopularPeriodType } from '@base/dtos';

@Injectable()
export class MostPopularService {
  constructor(
    private configService: ConfigService,
    private redisCacheService: RedisCacheService
  ) {}

  private get ApiKey() {
    return this.configService.get<string>('NYT_API_KEY');
  }

  private get BaseUrl() {
    return this.configService.get<string>('NYT_MOST_POPULAR_URL');
  }

  async getMostPopular(period: MostPopularPeriodType) {
    const url = `${this.BaseUrl}/${period}.json?api-key=${this.ApiKey}`;
    const key = this.redisCacheService.generateCacheKey(url);
    const cached = await this.redisCacheService.get<IMostPopularRoot>(key);
    if (cached) {
      return cached;
    }
    const res = (await axios.get<IMostPopularRoot>(url)).data;
    this.redisCacheService.set(key, res);
    return res;
  }
}