import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { Property } from "./Property";

@Entity()
export class Owner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({type: "varchar", name: "contact_no"})
    contactNo;

    @Column({type: "datetime", name: "created_at"})
    createdAt; 

    @Column({type: "datetime", name: "updated_at"})
    updatedAt; 

    // One owner has many properties | Many properties are owned by a owner
    @OneToMany(type => Property, properties => properties.owner)
    properties: Property[]

}
