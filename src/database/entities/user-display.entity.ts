import { Exclude } from "class-transformer";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('users_display')
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
    @JoinColumn({name:'user_id'})
    user: User;
}