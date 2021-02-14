const env = process.env;

export const DataCurlConfiguration = () => ({
  NYT_API_KEY: env.NYT_API_KEY,
  NYT_TOP_STORIES_URL: env.NYT_TOP_STORIES_URL,
  NYT_ARTICLE_SEARCH_URL: env.NYT_ARTICLE_SEARCH_URL,
  NYT_MOST_POPULAR_URL: env.NYT_MOST_POPULAR_URL,
});
