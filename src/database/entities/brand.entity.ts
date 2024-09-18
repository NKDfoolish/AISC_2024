import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}