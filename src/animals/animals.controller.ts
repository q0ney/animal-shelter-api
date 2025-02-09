import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Animal } from './entities/animal.entity';

@ApiTags('animals')
@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @ApiOperation({ summary: 'Create an animal' })
  @ApiResponse({ status: 201, description: 'The animal has been successfully created.', type: Animal})
  @Post()
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalsService.create(createAnimalDto);
  }

  @ApiOperation({ summary: 'Get all animals' })
  @ApiResponse({ status: 200, description: 'List of all animals', type: [Animal]})
  @Get()
  findAll() {
    return this.animalsService.findAll();
  }

  @ApiOperation({ summary: 'Get an animal by ID' })
  @ApiResponse({ status: 200, description: 'The animal has been successfully found.', type: Animal})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update an animal by ID' })
  @ApiResponse({ status: 200, description: 'The animal has been successfully updated.', type: Animal})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return this.animalsService.update(id, updateAnimalDto);
  }

  @ApiOperation({ summary: 'Delete an animal by ID' })
  @ApiResponse({ status: 200, description: 'The animal has been successfully deleted.'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalsService.remove(id);
  }
}
