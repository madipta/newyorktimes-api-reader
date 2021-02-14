import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { AppController } from './app.controller';

describe('AppController', () => {
  let module: TestingModule;
  let appController: AppController;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    appController = module.get<AppController>(AppController);
  });

  describe('App Controller', () => {
    it('App Controller should not null"', () => {
      expect(appController).not.toBeNull();
    });
    it('Get top stories should not null"', async () => {
      const res = await appController.getTopStories('science');
      expect(res).not.toBeNull();
    });
    it('Search article should not null"', async () => {
      const res = await appController.getArticles('linux');
      expect(res).not.toBeNull();
    });
  });
});