import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDisplay } from "src/database/entities/user-display.entity";
import { Repository } from "typeorm";
import { CreateUserDisplayDto } from "../dto/create-user-display.dto";
import { UpdateUserDisplayDto } from "../dto/update-user-display.dto";

@Injectable()
export class UserDisplayService {
    constructor(
        @InjectRepository(UserDisplay)
        private userDisplayRepository: Repository<UserDisplay>
    ){}

    findAll(){
        return this.userDisplayRepository.find();
    }

    async findOne(id: string){
        return await this.userDisplayRepository.findOneBy({
            id,
        })
    }

    async create(createUserDisplay: CreateUserDisplayDto){
        const isExist = await this.userDisplayRepository.existsBy({
            user_id : createUserDisplay.user_id,
        })

        if(isExist) {
            throw new BadRequestException("User's Display already exists");
        }

        return await this.userDisplayRepository.save({
            ...createUserDisplay,
        })
    }

    async update(id: string, body: UpdateUserDisplayDto){
        await this.userDisplayRepository.save({
            id,
            ...body
        })

        const brand = this.userDisplayRepository.findOneBy({
            id,
        })

        return brand;
    }

    async delete(id: string){
        const isExist = await this.userDisplayRepository.existsBy({
            id,
        })

        if (!isExist){
            throw new BadRequestException("User's Display not existed !!!")
        }

        await this.userDisplayRepository.delete({id});

        return `Delete User's Display with id ${id} successfully`;
    }
}