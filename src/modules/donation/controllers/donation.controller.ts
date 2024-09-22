import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DonationService } from "../services/donation.service";
import { CreateDonationDto } from "../dto/create-donation.dto";
import { UpdateDonationDto } from "../dto/update-donation.dto";

@Controller('donations')
@ApiTags('donations')
export class DonationController {
    constructor(
        private donationService: DonationService,
    ){}

    @Get()
    findAll(){
        return this.donationService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.donationService.findOne(id);
    }

    @Post()
    async create(@Body() body: CreateDonationDto){
        return await this.donationService.create(body);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: UpdateDonationDto){
        return await this.donationService.update(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.donationService.delete(id);
    }
}