import { Controller, Get, Query } from '@nestjs/common';
import {
  ArticleSearchSortType,
  MostPopularPeriodType,
  TopStoriesSectionType,
} from '@base/dtos';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('top-stories')
  getTopStories(@Query('section') section: TopStoriesSectionType = 'home') {
    return this.appService.getTopStories(section);
  }

  @Get('top-stories-sections')
  getTopStoriesSections() {
    return this.appService.getTopStoriesSections();
  }

  @Get('most-popular')
  getMostPopular(@Query('period') period: MostPopularPeriodType = 30) {
    return this.appService.getMostPopular(period);
  }

  @Get('article-search')
  getArticles(
    @Query('search') search: string,
    @Query('sort') sort: ArticleSearchSortType = 'relevance',
    @Query('page') page?: number
  ) {
    return this.appService.getArticles(search, sort, page);
  }
}
