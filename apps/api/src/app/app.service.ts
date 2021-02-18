import {
  TopStoriesService,
  ArticleSearchService,
  MostPopularService,
} from '@base/data-curl';
import {
  ArticleSearchSortType,
  MostPopularPeriodType,
  TopStoriesSectionType,
} from '@base/dtos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private topStoriesService: TopStoriesService,
    private mostPopular: MostPopularService,
    private articleSearch: ArticleSearchService
  ) {}

  getTopStories(section: TopStoriesSectionType) {
    return this.topStoriesService.getTopStories(section);
  }

  getTopStoriesSections() {
    return this.topStoriesService.getSections();
  }

  getMostPopular(period: MostPopularPeriodType) {
    return this.mostPopular.getMostPopular(period);
  }

  getArticles(search: string, sort?: ArticleSearchSortType, page?: number) {
    return this.articleSearch.getArticles({ search, sort, page });
  }
}
