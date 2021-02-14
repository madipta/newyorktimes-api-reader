import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisCacheConfigSchema } from './redis-cache.config.schema';
import { RedisCacheConfiguration } from './redis-cache.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [RedisCacheConfiguration],
      validationSchema: RedisCacheConfigSchema,
    }),
  ],
})
export class RedisCacheConfigModule {}
