import { Exclude } from "class-transformer";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('users-display')
export class UserDisplay {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @Column()
    total_score: number;

    @Column()
    rank: number;
    
    @OneToOne(() => User, (user) => user.userDisplay)
    user: User;
}