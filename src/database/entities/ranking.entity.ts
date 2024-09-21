import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('ranking')
export class Ranking {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @Column()
    ranking_month: string;

    @Column()
    total_score: number;

    @Column()
    rank: number;

    @OneToOne(() => User, (user) => user.ranking)
    @JoinColumn({name:'user_id'})
    user: User;
}