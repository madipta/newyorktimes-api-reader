import * as Joi from 'joi';

export const DataCurlConfigSchema = Joi.object({
  NYT_API_KEY: Joi.string().default('lbITX5tfk14oojurWRR1j5WacDNJ2ClB'),
  NYT_TOP_STORIES_URL: Joi.string().default('https://api.nytimes.com/svc/topstories/v2'),
  NYT_ARTICLE_SEARCH_URL: Joi.string().default('https://api.nytimes.com/svc/search/v2/articlesearch.json'),
  NYT_MOST_POPULAR_URL: Joi.string().default(' https://api.nytimes.com/svc/mostpopular/v2/shared'),
});
