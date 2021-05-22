import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

const env = process.env;

export const DataCurlConfiguration = () => ({
  NYT_API_KEY: env.NYT_API_KEY,
  NYT_API_BASE_URL: env.NYT_API_BASE_URL,
  NYT_TOP_STORIES_URL: env.NYT_TOP_STORIES_URL,
  NYT_ARTICLE_SEARCH_URL: env.NYT_ARTICLE_SEARCH_URL,
  NYT_MOST_POPULAR_URL: env.NYT_MOST_POPULAR_URL,
});

export const DataCurlConfigSchema = Joi.object({
  NYT_API_KEY: Joi.string().default('lbITX5tfk14oojurWRR1j5WacDNJ2ClB'),
  NYT_API_BASE_URL: Joi.string().default('https://api.nytimes.com/svc/'),
  NYT_TOP_STORIES_URL: Joi.string().default('topstories/v2'),
  NYT_ARTICLE_SEARCH_URL: Joi.string().default('search/v2/articlesearch.json'),
  NYT_MOST_POPULAR_URL: Joi.string().default('mostpopular/v2/shared'),
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [DataCurlConfiguration],
      validationSchema: DataCurlConfigSchema,
    }),
  ],
})
export class DataCurlConfigModule {}
