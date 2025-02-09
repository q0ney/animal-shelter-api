import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animal.dto';
import { IsString, IsInt, IsNotEmpty, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
    
    @ApiProperty({ example: "Luna", description: "The name of the animal" })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: "dog", description: "The type of the animal" })
    @IsString()
    @IsNotEmpty()
    type: string;

    @ApiProperty({ example: 3, description: "The age of the animal" })
    @IsInt()
    @IsNotEmpty()
    age: number;

    @ApiProperty({ example: false, description: "The availability of the animal for adoption" })
    @IsBoolean()
    availableForAdoption: boolean;

    @ApiProperty({ example: false, description: "The vaccination status of the animal" })
    @IsBoolean()
    isVaccinated: boolean;

    @ApiProperty({ example: false, description: "The sterilization status of the animal" })
    @IsBoolean()
    hasOwner: boolean;

}
