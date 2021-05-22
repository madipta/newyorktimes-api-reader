import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { ArticleSearchSortType, IArticleSearchRoot } from '@base/dtos';
import { RedisCacheService } from '@base/redis-cache';

@Injectable()
export class ArticleSearchService {
  constructor(
    private configService: ConfigService,
    private redisCacheService: RedisCacheService
  ) {}

  private get ApiKey() {
    return this.configService.get<string>('NYT_API_KEY');
  }

  private get BaseUrl() {
    return this.configService.get<string>('NYT_ARTICLE_SEARCH_URL');
  }

  async getArticles(dto: {
    search: string;
    sort?: ArticleSearchSortType;
    page?: number;
  }) {
    const q = encodeURIComponent(dto.search);
    const page = dto.page ? +dto.page : 0;
    const sort = dto.sort ?? 'relevance';
    const url = `${this.BaseUrl}?q=${q}&sort=${sort}&page=${page}&api-key=${this.ApiKey}`;
    const cached = await this.redisCacheService.get<IArticleSearchRoot>(url);
    if (cached && cached.expired > Date.now()) {
      return cached;
    }
    const res = (await axios.get<IArticleSearchRoot>(url)).data;
    this.redisCacheService.set(url, res);
    return res;
  }
}
