    import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/database/entities/user.entity";
import { Repository } from "typeorm";
import { UpdateUserDto } from "../dto/update-user.dto";
import { AuthService } from "./auth.service";
import { encryptPassWord } from '../../../common/helpers/crypto-helper';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        
        private authService: AuthService,
    ){}

    findAll(){
        return this.userRepository.find();
    }

    async findOne(id: string) {
        return await this.userRepository.findOneBy({
            id,
        })
    }

    async update(id: string, body: UpdateUserDto){
        const hashPass = await encryptPassWord(body.passWord);
        
        await this.userRepository.save({
            id,
            ...body,
            passWord: hashPass,
        })

        const user = this.userRepository.findOneBy({
            id,
        })

        return user;
    }

    async delete(id: string) {
        const isExist = await this.userRepository.existsBy({
            id,
        })

        if (!isExist) {
            throw new BadRequestException('User not existed!!!')
        }
        
        await this.userRepository.delete({ id });
        return `Delete user with id ${id} successfully`;
      }
}
