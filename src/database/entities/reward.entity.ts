import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('reward')
export class Reward {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    brand_id: string;

    @Column()
    description: string;

    @Column()
    score: number;

    @Column()
    total_remaining: number;

    @Column()
    expired_date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}