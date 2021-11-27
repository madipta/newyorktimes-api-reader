import * as Joi from 'joi';

export const RedisCacheConfigSchema = Joi.object({
  REDIS_CACHE_HOST: Joi.string().default('localhost'),
  REDIS_CACHE_PORT: Joi.number().default(6379),
  REDIS_CACHE_TTL: Joi.number().default(3600),
  REDIS_CACHE_MAX: Joi.number().default(10000),
});
