import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { ITopStoriesRoot, TopStoriesSectionType, TOP_STORIES_SECTIONS } from '@base/dtos';
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

  private get BaseUrl() {
    return this.configService.get<string>('NYT_TOP_STORIES_URL');
  }

  getSections() {
    return TOP_STORIES_SECTIONS;
  }

  async getTopStories(section: TopStoriesSectionType) {
    const url = `${this.BaseUrl}/${section}.json?api-key=${this.ApiKey}`;
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
