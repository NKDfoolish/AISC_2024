import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RankingService } from "../services/ranking.service";
import { CreateRankingDto } from "../dto/create-ranking.dto";
import { UpdateRankingDto } from "../dto/update-ranking.dto";

@Controller('rankings')
@ApiTags('rankings')
export class RankingController {
    constructor(
        private rankingService: RankingService,
    ){}

    @Get()
    findAll(){
        return this.rankingService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.rankingService.findOne(id);
    }

    @Post()
    async create(@Body() body: CreateRankingDto){
        return await this.rankingService.create(body);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: UpdateRankingDto){
        return await this.rankingService.update(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.rankingService.delete(id);
    }
}