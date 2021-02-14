import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisCacheModule } from '@base/redis-cache';
import { DataCurlConfigSchema } from './config/data-curl.config.schema';
import { DataCurlConfiguration } from './config/data-curl.configuration';
import { TopStoriesService } from './top-stories/top-stories.service';
import { ArticleSearchService } from './article-search/article-search.service';

@Module({
  imports: [
    RedisCacheModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [DataCurlConfiguration],
      validationSchema: DataCurlConfigSchema,
    }),
  ],
  providers: [TopStoriesService, ArticleSearchService],
  exports: [TopStoriesService, ArticleSearchService],
})
export class DataCurlModule {}
