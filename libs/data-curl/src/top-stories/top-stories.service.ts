import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { ITopStoriesRoot, TopStoriesSectionType } from '@base/dtos';
import { RedisCacheService } from '@base/redis-cache';

@Injectable()
export class TopStoriesService {
  constructor(
    private configService: ConfigService,
    private redisCacheService: RedisCacheService
  ) {}

  private get ApiKey() {
    return this.configService.get<string>('NYT_API_KEY');
  }

  async getTopStories(section: TopStoriesSectionType) {
    const baseurl = this.configService.get<string>('NYT_TOP_STORIES_URL');
    const url = `${baseurl}/${section}.json?api-key=${this.ApiKey}`;
    const key = this.redisCacheService.generateCacheKey(url);
    const cached = await this.redisCacheService.get<ITopStoriesRoot>(key);
    if (cached) {
      return cached;
    }
    const res = (await axios.get<ITopStoriesRoot>(url)).data;
    this.redisCacheService.set(key, res);
    return res;
  }
}
