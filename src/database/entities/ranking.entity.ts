import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}