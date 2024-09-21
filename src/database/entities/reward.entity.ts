import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Brand } from "./brand.entity";

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

    @ManyToOne(() => Brand, (brand) => brand.rewards)
    @JoinColumn({name: 'brand_id'})
    brand: Brand;
}