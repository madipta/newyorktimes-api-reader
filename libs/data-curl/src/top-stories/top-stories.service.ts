import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TopStoriesSectionType, TOP_STORIES_SECTIONS } from '@base/dtos';
import { RedisCacheService } from '@base/redis-cache';

@Injectable()
export class TopStoriesService {
  constructor(
    private configService: ConfigService,
    private redisCacheService: RedisCacheService
  ) {}

  private getUrl(section: TopStoriesSectionType) {
    const base = this.configService.get<string>('NYT_API_BASE_URL');
    const path = this.configService.get<string>('NYT_TOP_STORIES_URL');
    const key = this.configService.get<string>('NYT_API_KEY');
    return `${base}/${path}/${section}.json?api-key=${key}`;
  }

  getSections() {
    return TOP_STORIES_SECTIONS;
  }

  async getTopStories(section: TopStoriesSectionType) {
    const url = this.getUrl(section);
    return this.redisCacheService.fromUrl(url);
  }
}
