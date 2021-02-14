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
  getTopStories(@Query('section') section: TopStoriesSectionType) {
    return this.appService.getTopStories(section);
  }

  @Get('most-popular')
  getMostPopular(@Query('period') period: MostPopularPeriodType) {
    return this.appService.getMostPopular(period);
  }

  @Get('article-search')
  getArticles(
    @Query('search') search: string,
    @Query('sort') sort?: ArticleSearchSortType,
    @Query('page') page?: number
  ) {
    return this.appService.getArticles(search, sort, page);
  }
}
