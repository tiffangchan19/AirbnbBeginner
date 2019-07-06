import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column() // @Column({type: "text"}) unlimited text
    name: string;

    @Column()
    email: string;

    @Column({type: "varchar", name: "contact_no"})
    contactNo;

    @Column({type: "datetime", name: "created_at"})
    createdAt; 

    @Column({type: "datetime", name: "updated_at"})
    updatedAt; 

    // One user has many bookings
    @OneToMany(type => Booking, booking => booking.user)
    bookings: Booking[]

}
