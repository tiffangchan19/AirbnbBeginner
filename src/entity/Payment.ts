import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    amount: number;

    // Many installments per booking
    @ManyToOne(type => Booking, booking => booking.payments)
    @JoinColumn({name: "booking_id"})
    booking: Booking

}
