import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "animals" })
export class Animal {
    @ApiProperty({ example: "043f0f7c-8dc2-41d4-8657-fbfe7fff519b", description: "The unique identifier of the animal" })
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ApiProperty({ example: "Luna", description: "The name of the animal" })
    @Column()
    name: string;

    @ApiProperty({ example: "dog", description: "The type of the animal" })
    @Column()
    type: string;

    @ApiProperty({ example: 3, description: "The age of the animal" })
    @Column()
    age: number;

    @ApiProperty({ example: false, description: "The availability of the animal for adoption" })
    @Column({default: false})
    availableForAdoption: boolean;

    @ApiProperty({ example: false, description: "The vaccination status of the animal" })
    @Column({ default: false })
    isVaccinated: boolean;

    @ApiProperty({ example: false, description: "The sterilization status of the animal" })
    @Column({ default: false })
    hasOwner: boolean;

    @ApiProperty({ example: "043f0f7c-8dc2-41d4-8657-fbfe7fff519b", description: "The unique identifier of the owner" })
    @Column({ nullable: true })
    ownerId: string;
}