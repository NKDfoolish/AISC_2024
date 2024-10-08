import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { Type } from "./type.entity";

@Entity('donation')
export class Donation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @Column()
    quantity: number;

    @Column()
    total_score: number;

    @Column()
    type_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
    @OneToOne(() => User, (user) => user.donation)
    @JoinColumn({name:'user_id'})
    user: User;

    @OneToOne(() => Type, (type) => type.donation)
    @JoinColumn({name:'type_id'})
    type: Type;
}