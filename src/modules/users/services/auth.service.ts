import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/database/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async encryptPassWord(rawPassWord: string){
        const salt = await bcrypt.genSalt();
        const encryptPass = await bcrypt.hash(rawPassWord, salt);

        return encryptPass;
    }

    async signUp(createUser: CreateUserDto){
        const isExist = await this.userRepository.existsBy({
            userName: createUser.userName,
        });

        if (isExist){
            throw new BadRequestException('User already exists');
        }

        const hashPass = await this.encryptPassWord(createUser.passWord);

        return await this.userRepository.save({
            ...createUser,
            passWord: hashPass,
        });

    }

    async signIn(userName: string, passWord: string){
        const user = await this.userRepository.findOne({
            where: {userName},
            select: ['id', 'firstName', 'lastName', 'email','telephone', 'createdAt', 'passWord'],
        });

        if (!user){
            throw new BadRequestException('Invalid userName or passWord');
        }

        const hashedpassword = user.passWord;
        const isMatch = await bcrypt.compare(passWord, hashedpassword);
        
        if (isMatch){
            return user;
        } else {
            throw new BadRequestException('Invalid userName or passWord');
        }
    }
    
}