import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ArticleSearchSortType } from '@base/dtos';
import { RedisCacheService } from '@base/redis-cache';

type ArticleSearchInput = {
  search: string;
  sort?: ArticleSearchSortType;
  page?: number;
};

@Injectable()
export class ArticleSearchService {
  constructor(
    private configService: ConfigService,
    private redisCacheService: RedisCacheService
  ) {}

  private getUrl(dto: ArticleSearchInput) {
    const base = this.configService.get<string>('NYT_API_BASE_URL');
    const path = this.configService.get<string>('NYT_ARTICLE_SEARCH_URL');
    const key = this.configService.get<string>('NYT_API_KEY');
    const q = encodeURIComponent(dto.search);
    const page = dto.page ? +dto.page : 0;
    const sort = dto.sort ?? 'relevance';
    return `${base}/${path}/?q=${q}&sort=${sort}&page=${page}&api-key=${key}`;
  }

  async getArticles(dto: ArticleSearchInput) {
    const url = this.getUrl(dto);
    return this.redisCacheService.fromUrl(url);
  }
}
