import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Reward } from "src/database/entities/reward.entity";
import { Repository } from "typeorm";
import { CreateRewardDto } from "../dto/create-reward.dto";
import { UpdateRewardDto } from "../dto/update-reward.dto";

@Injectable()
export class RewardService {
    constructor(
        @InjectRepository(Reward)
        private rewardRepository: Repository<Reward>
    ){}

    findAll(){
        return this.rewardRepository.find();
    }

    async findOne(id: string){
        return await this.rewardRepository.findOneBy({
            id,
        })
    }

    async create(createReward: CreateRewardDto){
        const isExist = await this.rewardRepository.existsBy({
            name : createReward.name,
        })

        if(isExist) {
            throw new BadRequestException('Reward already exists');
        }

        return await this.rewardRepository.save({
            ...createReward,
        })
    }

    async update(id: string, body: UpdateRewardDto){
        await this.rewardRepository.save({
            id,
            ...body
        })

        const brand = this.rewardRepository.findOneBy({
            id,
        })

        return brand;
    }

    async delete(id: string){
        const isExist = await this.rewardRepository.existsBy({
            id,
        })

        if (!isExist){
            throw new BadRequestException('Reward not existed !!!')
        }

        await this.rewardRepository.delete({id});

        return `Delete Reward with id ${id} successfully`;
    }
}