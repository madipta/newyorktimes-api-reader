# NewYork Times API reader

using Nx monorepo, NestJs, NextJs, Redis, Axios

get your free account and api key at https://developer.nytimes.com/accounts/create

## set environment variable (optional)

`SET NYT_API_KEY={your api_key}`

## using docker-compose (default)

Run `docker-compose up`

## using dedicated redis

`SET REDIS_CACHE_HOST={your redis host}`  
`SET REDIS_CACHE_PORT={your redis port}`

## redis cache configuration (optional)

`SET REDIS_CACHE_TTL={expiration time in seconds}`  
`SET REDIS_CACHE_MAX={max item in cache}`

## start nestjs API server

`npx nx serve api`

## start nextjs web server

`npx nx serve web`
