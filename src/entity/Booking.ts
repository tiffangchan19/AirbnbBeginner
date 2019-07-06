import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { User } from "./User";
import { Property } from "./Property";
import { Payment } from "./Payment";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column({type: "date", name: "booking_date"})
    bookingDate;

    @Column({type: "datetime", name: "check_in"})
    checkIn; 

    @Column({type: "datetime", name: "check_out"})
    checkOut; 

    @Column({type: "datetime", name: "created_at"})
    createdAt; 

    @Column({type: "datetime", name: "updated_at"})
    updatedAt; 

    // Many bookings per user
    @ManyToOne(type => User, user => user.bookings)
    @JoinColumn({name: "user_id"})
    user: User

    // Many bookings per property
    @ManyToOne(type => Property, property => property.bookings)
    @JoinColumn({name: "property_id"})
    property: Property

    // One booking that can be paid by installments
    @OneToMany(type => Payment, payment => payment.booking)
    payments: Payment[]

}
