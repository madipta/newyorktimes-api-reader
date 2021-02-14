import { Test, TestingModule } from '@nestjs/testing';
import { DataCurlModule } from '../data-curl.module';
import { TopStoriesService } from './top-stories.service';

describe('RequestService', () => {
  let service: TopStoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DataCurlModule]
    }).compile();

    service = module.get<TopStoriesService>(TopStoriesService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
    const result = (await service.getTopStories('science'));
    expect(result).not.toBeNull();
  });
});
