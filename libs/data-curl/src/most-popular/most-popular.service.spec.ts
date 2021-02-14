import { Test, TestingModule } from '@nestjs/testing';
import { MostPopularService } from './most-popular.service';

describe('MostPopularService', () => {
  let service: MostPopularService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MostPopularService],
    }).compile();

    service = module.get<MostPopularService>(MostPopularService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
