import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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
    description: string;

    @Column()
    total_score: number;

    @Column()
    rank: number;

    @OneToOne(() => User, (user) => user.ranking)
    user: User;
}