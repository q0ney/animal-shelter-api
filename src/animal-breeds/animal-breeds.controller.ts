import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalBreedsService } from './animal-breeds.service';
import { CreateAnimalBreedDto } from './dto/create-animal-breed.dto';
import { UpdateAnimalBreedDto } from './dto/update-animal-breed.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('animal-breeds')
@Controller('animal-breeds')
export class AnimalBreedsController {
  constructor(private readonly animalBreedsService: AnimalBreedsService) {}

  @ApiOperation({ summary: 'Create an animal breed' })
  @ApiResponse({ status: 201, description: 'The animal breed has been successfully created.'})
  @Post()
  create(@Body() createAnimalBreedDto: CreateAnimalBreedDto) {
    return this.animalBreedsService.create(createAnimalBreedDto);
  }

  @ApiOperation({ summary: 'Get all animal breeds' })
  @ApiResponse({ status: 200, description: 'List of all animal breeds'})
  @Get()
  findAll() {
    return this.animalBreedsService.findAll();
  }

  @ApiOperation({ summary: 'Get an animal breed by ID' })
  @ApiResponse({ status: 200, description: 'The animal breed has been successfully found.'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalBreedsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update an animal breed by ID' })
  @ApiResponse({ status: 200, description: 'The animal breed has been successfully updated.'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalBreedDto: UpdateAnimalBreedDto) {
    return this.animalBreedsService.update(id, updateAnimalBreedDto);
  }

  @ApiOperation({ summary: 'Delete an animal breed by ID' })
  @ApiResponse({ status: 200, description: 'The animal breed has been successfully deleted.'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalBreedsService.remove(id);
  }
}
