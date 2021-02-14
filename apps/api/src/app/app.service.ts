import { TopStoriesService, ArticleSearchService } from '@base/data-curl';
import { ArticleSearchSortType, TopStoriesSectionType } from '@base/dtos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private topStoriesService: TopStoriesService,
    private articleSearch: ArticleSearchService
  ) {}

  getTopStories(section: TopStoriesSectionType) {
    return this.topStoriesService.getTopStories(section);
  }

  getArticles(search: string, sort?: ArticleSearchSortType, page?: number) {
    return this.articleSearch.getArticles({ search, sort, page });
  }
}
