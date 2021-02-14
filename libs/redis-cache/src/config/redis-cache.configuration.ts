const env = process.env;

export const RedisCacheConfiguration = () => ({
  REDIS_CACHE_HOST: env.REDIS_CACHE_HOST,
  REDIS_CACHE_PORT: env.REDIS_CACHE_PORT,
  REDIS_CACHE_TTL: env.REDIS_CACHE_TTL,
  REDIS_CACHE_MAX: env.REDIS_CACHE_MAX,
});
