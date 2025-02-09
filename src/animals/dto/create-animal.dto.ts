import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateAnimalDto {
    
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
}
