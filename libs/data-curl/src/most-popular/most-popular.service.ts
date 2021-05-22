import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisCacheService } from '@base/redis-cache';
import { MostPopularPeriodType } from '@base/dtos';

@Injectable()
export class MostPopularService {
  constructor(
    private configService: ConfigService,
    private redisCacheService: RedisCacheService
  ) {}

  private getUrl(period: MostPopularPeriodType) {
    const base = this.configService.get<string>('NYT_API_BASE_URL');
    const path = this.configService.get<string>('NYT_MOST_POPULAR_URL');
    const key = this.configService.get<string>('NYT_API_KEY');
    return `${base}/${path}/${period}.json?api-key=${key}`;
  }

  async getMostPopular(period: MostPopularPeriodType) {
    const url = this.getUrl(period);
    return this.redisCacheService.fromUrl(url);
  }
}
