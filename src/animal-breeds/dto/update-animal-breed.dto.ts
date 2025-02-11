import { PartialType } from '@nestjs/swagger';
import { CreateAnimalBreedDto } from './create-animal-breed.dto';
import { ApiProperty } from '@nestjs/swagger';
import { AnimalType } from 'src/shared/enums/animal-type.enum';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateAnimalBreedDto extends PartialType(CreateAnimalBreedDto) {

    @ApiProperty({ example: 'Golden Retriever', description: 'The name of the animal breed' })
    @IsString()
    @IsNotEmpty()
    breed: string;

    @ApiProperty({ example: AnimalType.DOG, description: 'The type of the animal breed' })
    @IsEnum(AnimalType)
    @IsNotEmpty()
    type: AnimalType;
}
