import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Reward } from "./reward.entity";

@Entity('brand')
export class Brand {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    brand_name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @Column()
    total_amount_voucher: number;

    @Column()
    total_remaining_voucher: number;

    @Column()
    sign_date: Date;

    @Column()
    views: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Reward, (reward) => reward.brand)
    rewards: Reward[];
}