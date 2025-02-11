import { Module } from '@nestjs/common';
import { AnimalBreedsService } from './animal-breeds.service';
import { AnimalBreedsController } from './animal-breeds.controller';

@Module({
  controllers: [AnimalBreedsController],
  providers: [AnimalBreedsService],
})
export class AnimalBreedsModule {}
