# NewYork Times API reader

using Nx monorepo, NestJs, NextJs, Redis, Axios

get your free account and api key at https://developer.nytimes.com/accounts/create  

<br />

![screen shot](https://raw.githubusercontent.com/madipta/newyorktimes-api-reader/master/images/screen-01.png)  

<br />

![screen shot](https://raw.githubusercontent.com/madipta/newyorktimes-api-reader/master/images/screen-02.png)  

<br />

## start redis server using docker-compose

rename .env.sample to .env

cmd execute `docker-compose up`  


## start nestjs API server

cmd execute `npx nx serve api`  


## start nextjs web server

cmd execute `npx nx serve web`