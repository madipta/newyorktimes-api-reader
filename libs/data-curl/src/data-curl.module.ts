import { Module } from '@nestjs/common';
import { RedisCacheModule } from '@base/redis-cache';
import { TopStoriesService } from './top-stories/top-stories.service';
import { ArticleSearchService } from './article-search/article-search.service';
import { MostPopularService } from './most-popular/most-popular.service';
import { DataCurlConfigModule } from './config/data-curl.config.module';

@Module({
  imports: [RedisCacheModule, DataCurlConfigModule],
  providers: [TopStoriesService, ArticleSearchService, MostPopularService],
  exports: [TopStoriesService, ArticleSearchService, MostPopularService],
})
export class DataCurlModule {}
