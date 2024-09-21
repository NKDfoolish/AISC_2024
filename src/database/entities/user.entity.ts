import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Ranking } from "./ranking.entity";
import { Donation } from "./donation.entity";
import { UserDisplay } from "./user-display.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userName: string;

    @Exclude()
    @Column()
    passWord: string;

    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    role: string;

    @Column()
    telephone: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Ranking, (ranking) => ranking.user)
    ranking: Ranking;

    @OneToOne(() => Donation, (donation) => donation.user)
    donation: Donation;

    @OneToOne(() => UserDisplay, (userDisplay) => userDisplay.user)
    userDisplay: UserDisplay;
}