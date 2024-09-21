import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RewardService } from "../services/reward.service";
import { CreateRewardDto } from "../dto/create-reward.dto";
import { UpdateRewardDto } from "../dto/update-reward.dto";

@Controller('rewards')
@ApiTags('rewards')
export class RewardController {
    constructor(
        private rewardService: RewardService,
    ){}

    @Get()
    findAll(){
        return this.rewardService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.rewardService.findOne(id);
    }

    @Post()
    async create(@Body() body: CreateRewardDto){
        return await this.rewardService.create(body);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: UpdateRewardDto){
        return await this.rewardService.update(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.rewardService.delete(id);
    }
}