import { ApiProperty } from "@nestjs/swagger";
import { AnimalType } from "src/shared/enums/animal-type.enum";
import { IsString, IsNotEmpty, IsEnum } from "class-validator";

export class CreateAnimalBreedDto {
    
    @ApiProperty({ example: "Golden Retriever", description: "The name of the animal breed" })
    @IsString()
    @IsNotEmpty()
    breed: string;

    @ApiProperty({ example: AnimalType.DOG, description: "The type of the animal breed" })
    @IsEnum(AnimalType)
    @IsNotEmpty()
    type: AnimalType;
}
