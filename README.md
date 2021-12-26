# NewYork Times API reader

using Nx monorepo, NestJs, NextJs, Redis, Axios

get your free account and api key at https://developer.nytimes.com/accounts/create
  

![screen shot](https://raw.githubusercontent.com/madipta/newyorktimes-api-reader/master/images/screen-01.png)
  

![screen shot](https://raw.githubusercontent.com/madipta/newyorktimes-api-reader/master/images/screen-01.png)
  

## start redis server using docker-compose

rename .env.sample to .env

Run `docker-compose up`

## start nestjs API server

`npx nx serve api`

## start nextjs web server

`npx nx serve web`