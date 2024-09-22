import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Type } from "src/database/entities/type.entity";
import { Repository } from "typeorm";
import { CreateTypeDto } from "../dto/create-type.dto";
import { UpdateTypeDto } from "../dto/update-type.dto";

@Injectable()
export class TypeService {
    constructor(
        @InjectRepository(Type)
        private typeRepository: Repository<Type>
    ){}

    findAll(){
        return this.typeRepository.find();
    }

    async findOne(id: string){
        return await this.typeRepository.findOneBy({
            id,
        })
    }

    async create(createType: CreateTypeDto){
        const isExist = await this.typeRepository.existsBy({
            name : createType.name,
        })

        if(isExist) {
            throw new BadRequestException('Type already exists');
        }

        return await this.typeRepository.save({
            ...createType,
        })
    }

    async update(id: string, body: UpdateTypeDto){
        await this.typeRepository.save({
            id,
            ...body
        })

        const brand = this.typeRepository.findOneBy({
            id,
        })

        return brand;
    }

    async delete(id: string){
        const isExist = await this.typeRepository.existsBy({
            id,
        })

        if (!isExist){
            throw new BadRequestException('Type not existed !!!')
        }

        await this.typeRepository.delete({id});

        return `Delete Type with id ${id} successfully`;
    }
}