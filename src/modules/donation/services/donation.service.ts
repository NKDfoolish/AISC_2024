import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Donation } from "src/database/entities/donation.entity";
import { Repository } from "typeorm";
import { CreateDonationDto } from "../dto/create-donation.dto";
import { UpdateDonationDto } from "../dto/update-donation.dto";

@Injectable()
export class DonationService {
    constructor(
        @InjectRepository(Donation)
        private donationRepository: Repository<Donation>
    ){}

    findAll(){
        return this.donationRepository.find();
    }

    async findOne(id: string){
        return await this.donationRepository.findOneBy({
            id,
        })
    }

    async create(createDonation: CreateDonationDto){
        const isExist = await this.donationRepository.existsBy({
            user_id : createDonation.user_id,
        })

        if(isExist) {
            throw new BadRequestException('Donation already exists');
        }

        return await this.donationRepository.save({
            ...createDonation,
        })
    }

    async update(id: string, body: UpdateDonationDto){
        await this.donationRepository.save({
            id,
            ...body
        })

        const brand = this.donationRepository.findOneBy({
            id,
        })

        return brand;
    }

    async delete(id: string){
        const isExist = await this.donationRepository.existsBy({
            id,
        })

        if (!isExist){
            throw new BadRequestException('Donation not existed !!!')
        }

        await this.donationRepository.delete({id});

        return `Delete Donation with id ${id} successfully`;
    }
}