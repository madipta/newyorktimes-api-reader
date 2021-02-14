import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { RedisCacheConfigModule } from './config/redis-cache.config.module';
import { RedisCacheService } from './services/redis-cache.service';

@Module({
  imports: [
    RedisCacheConfigModule,
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get('REDIS_CACHE_HOST'),
        port: configService.get('REDIS_CACHE_PORT'),
        ttl: configService.get('REDIS_CACHE_TTL'),
        max: configService.get('REDIS_CACHE_MAX'),
      }),
    }),
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}
