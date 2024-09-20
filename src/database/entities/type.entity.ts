import { Exclude } from "class-transformer";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Donation } from "./donation.entity";

@Entity('type')
export class Type {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    co2: number;

    @OneToOne(() => Donation, (donation) => donation.type)
    donation: Donation;
}