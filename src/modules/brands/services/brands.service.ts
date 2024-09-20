import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Brand } from "src/database/entities/brand.entity";
import { Repository } from "typeorm";
import { UpdateBrandDto } from "../dto/update-brand.dto";
import { CreateBrandDto } from "../dto/create-brand.dto";

@Injectable()
export class BrandsService {
    constructor(
        @InjectRepository(Brand)
        private brandRepository: Repository<Brand>,

    ){}

    findAll(){
        return this.brandRepository.find();
    }

    async findOne(id: string){
        return await this.brandRepository.findOneBy({
            id,
        })
    }

    async create(createBrand: CreateBrandDto){
        const isExist = await this.brandRepository.existsBy({
            brand_name : createBrand.brand_name,
        })

        if(isExist) {
            throw new BadRequestException('Brand already exists');
        }

        return await this.brandRepository.save({
            ...createBrand,
        })
    }

    async update(id: string, body: UpdateBrandDto){
        await this.brandRepository.save({
            id,
            ...body
        })

        const brand = this.brandRepository.findOneBy({
            id,
        })

        return brand;
    }

    async delete(id: string){
        const isExist = await this.brandRepository.existsBy({
            id,
        })

        if (!isExist){
            throw new BadRequestException('Brand not existed !!!')
        }

        await this.brandRepository.delete({id});

        return `Delete brand with id ${id} successfully`;
    }
}