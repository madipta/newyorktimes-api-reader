import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataCurlConfigSchema } from './data-curl.config.schema';
import { DataCurlConfiguration } from './data-curl.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [DataCurlConfiguration],
      validationSchema: DataCurlConfigSchema,
    }),
  ],
})
export class DataCurlConfigModule {}
