import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnimalsService {

  constructor(@InjectRepository(Animal) private readonly animalsRepository: Repository<Animal>) {}

  async create(createAnimalDto: CreateAnimalDto) {
    const animal = this.animalsRepository.create(createAnimalDto);
   
    return await this.animalsRepository.save(animal);
  }

  async findAll() {
    return await this.animalsRepository.find();
  }

  async findOne(id: string) {
    return await this.animalsRepository.findOne({ where: { id } });
  }

  async update(id: string, updateAnimalDto: UpdateAnimalDto) {
    const animal = await this.animalsRepository.findOne({where: {id}});
    if (!animal) {
      throw new NotFoundException();
    }

    const updatedAnimal = Object.assign(animal, updateAnimalDto);

    return await this.animalsRepository.save(updatedAnimal);
  }

  async remove(id: string) {
    const animal = await this.animalsRepository.findOne({where: {id}});
    if (!animal) {
      throw new NotFoundException();
    }

    return await this.animalsRepository.remove(animal);
  }
  
}
