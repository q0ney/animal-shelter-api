import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AnimalType } from 'src/shared/enums/animal-type.enum';
import { Animal } from 'src/animals/entities/animal.entity';

@Entity({ name: 'animal_breeds' })
export class AnimalBreed {
    @ApiProperty({ example: '043f0f7c-8dc2-41d4-8657-fbfe7fff519b', description: 'The unique identifier of the animal breed' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: 'Golden Retriever', description: 'The name of the animal breed' })
    @Column()
    breed: string;

    @ApiProperty({ example: AnimalType.DOG, description: 'The type of the animal breed', enum: AnimalType })
    @Column({ type: 'enum', enum: AnimalType, default: AnimalType.OTHER })
    type: string;
    
    @OneToMany(() => Animal, (animal) => animal.breed) // Relation to Animal
    animals: Animal[];
}
