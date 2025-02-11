import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalBreedDto } from './dto/create-animal-breed.dto';
import { UpdateAnimalBreedDto } from './dto/update-animal-breed.dto';
import { Repository } from 'typeorm';
import { AnimalBreed } from './entities/animal-breed.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnimalBreedsService {

  constructor(@InjectRepository(AnimalBreed) private readonly animalBreedsRepository: Repository<AnimalBreed>) {}

  async create(createAnimalBreedDto: CreateAnimalBreedDto) {
    const animalBreed = this.animalBreedsRepository.create(createAnimalBreedDto);

    return await this.animalBreedsRepository.save(animalBreed);
  }

  async findAll() {
    return await this.animalBreedsRepository.find();
  }

  async findOne(id: string) {
    return await this.animalBreedsRepository.findOne({ where: { id } });
  }

  async update(id: string, updateAnimalBreedDto: UpdateAnimalBreedDto) {
    const animalBreed = await this.animalBreedsRepository.findOne({where: {id}});
    if (!animalBreed) {
      throw new NotFoundException();
    }

    const updatedAnimalBreed = Object.assign(animalBreed, updateAnimalBreedDto);

    return await this.animalBreedsRepository.save(updatedAnimalBreed);
  }

  async remove(id: string) {
    const animalBreed = await this.animalBreedsRepository.findOne({where: {id}});
    if (!animalBreed) {
      throw new NotFoundException();
    }

    return await this.animalBreedsRepository.remove(animalBreed);
  }
}
