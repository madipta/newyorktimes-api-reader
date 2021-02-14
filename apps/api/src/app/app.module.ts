import { Module } from '@nestjs/common';
import { DataCurlModule } from '@base/data-curl';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DataCurlModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
