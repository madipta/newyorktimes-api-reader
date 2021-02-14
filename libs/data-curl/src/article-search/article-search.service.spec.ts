import { Test, TestingModule } from '@nestjs/testing';
import { DataCurlModule } from '../data-curl.module';
import { ArticleSearchService } from './article-search.service';

describe('ArticleSearchService', () => {
  let service: ArticleSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DataCurlModule]
    }).compile();

    service = module.get<ArticleSearchService>(ArticleSearchService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
    const result = (await service.getArticles({ search: 'bill gates'}));
    expect(result).not.toBeNull();
  });
});
