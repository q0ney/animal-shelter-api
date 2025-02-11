import { IsString, IsInt, IsNotEmpty, IsEnum, IsUUID, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateAnimalDto {
    
    @ApiProperty({ example: "Luna", description: "The name of the animal" })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 3, description: "The age of the animal" })
    @IsInt()
    @IsNotEmpty()
    age: number;

    @ApiProperty({ example: '043f0f7c-8dc2-41d4-8657-fbfe7fff519b', description: 'ID of the animal breed', required: false })
    @IsUUID()
    @IsOptional()
    breedId?: string;
}
