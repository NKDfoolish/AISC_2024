import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Ranking } from "src/database/entities/ranking.entity";
import { Repository } from "typeorm";
import { CreateRankingDto } from "../dto/create-ranking.dto";
import { UpdateRankingDto } from "../dto/update-ranking.dto";

@Injectable()
export class RankingService {
    constructor(
        @InjectRepository(Ranking)
        private rankingRepository: Repository<Ranking>
    ){}

    findAll(){
        return this.rankingRepository.find();
    }

    async findOne(id: string){
        return await this.rankingRepository.findOneBy({
            id,
        })
    }

    async create(createRanking: CreateRankingDto){
        const isExist = await this.rankingRepository.existsBy({
            user_id : createRanking.user_id,
        })

        if(isExist) {
            throw new BadRequestException('Ranking already exists');
        }

        return await this.rankingRepository.save({
            ...createRanking,
        })
    }

    async update(id: string, body: UpdateRankingDto){
        await this.rankingRepository.save({
            id,
            ...body
        })

        const brand = this.rankingRepository.findOneBy({
            id,
        })

        return brand;
    }

    async delete(id: string){
        const isExist = await this.rankingRepository.existsBy({
            id,
        })

        if (!isExist){
            throw new BadRequestException('Ranking not existed !!!')
        }

        await this.rankingRepository.delete({id});

        return `Delete Ranking with id ${id} successfully`;
    }
}