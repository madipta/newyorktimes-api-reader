# NY-Reader

NewYork Times API (https://developer.nytimes.com/) consumer using Nx monorepo, NestJs, Redis (cache)

get your free account and api key at https://developer.nytimes.com/accounts/create

## set environment variable

`SET NYT_API_KEY={your api_key}`

## if using docker-compose

Run `docker-compose up`

## if using dedicated redis

`SET REDIS_CACHE_HOST={your redis host}`
`SET REDIS_CACHE_PORT={your redis port}`

## optional redis cache configuration

`SET REDIS_CACHE_TTL={expiration time in seconds}`
`SET REDIS_CACHE_MAX={max item in cache}`
