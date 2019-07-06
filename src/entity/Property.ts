import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { Booking } from "./Booking";
import { Owner } from "./Owner";
import { Tag } from "./Tag";
import { PropertiesTags } from "./PropertiesTags";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column({type: "datetime", name: "created_at"})
    createdAt; 

    @Column({type: "datetime", name: "updated_at"})
    updatedAt; 
    
    // One property for different bookings
    @OneToMany(type => Booking, booking => booking.property)
    bookings: Booking[]

    // Many bookings per property | One owner has many properties
    @ManyToOne(type => Owner, owner => owner.properties)
    @JoinColumn({name: "owner_id"})
    owner: Owner

    @OneToMany((type) => PropertiesTags, (propertiesTags) => propertiesTags.property)
    propertiesTags: PropertiesTags[];
    
}
