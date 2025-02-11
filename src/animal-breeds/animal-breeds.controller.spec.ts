import { Test, TestingModule } from '@nestjs/testing';
import { AnimalBreedsController } from './animal-breeds.controller';
import { AnimalBreedsService } from './animal-breeds.service';

describe('AnimalBreedsController', () => {
  let controller: AnimalBreedsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalBreedsController],
      providers: [AnimalBreedsService],
    }).compile();

    controller = module.get<AnimalBreedsController>(AnimalBreedsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
