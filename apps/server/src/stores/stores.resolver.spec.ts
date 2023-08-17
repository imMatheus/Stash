import { Test, TestingModule } from '@nestjs/testing';
import { StoresResolver } from './stores.resolver';
import { StoresService } from './stores.service';

describe('StoresResolver', () => {
  let resolver: StoresResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoresResolver, StoresService],
    }).compile();

    resolver = module.get<StoresResolver>(StoresResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
