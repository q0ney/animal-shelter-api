import { IsString, IsInt, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AnimalType } from 'src/shared/enums/animal-type.enum';


export class CreateAnimalDto {
    
    @ApiProperty({ example: "Luna", description: "The name of the animal" })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: AnimalType.DOG, description: 'Type of the animal', enum: AnimalType })
    @IsEnum(AnimalType)
    type: AnimalType;

    @ApiProperty({ example: 3, description: "The age of the animal" })
    @IsInt()
    @IsNotEmpty()
    age: number;
}
