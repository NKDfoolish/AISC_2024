import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BrandsService } from "../services/brands.service";
import { UpdateBrandDto } from "../dto/update-brand.dto";
import { CreateBrandDto } from "../dto/create-brand.dto";

@Controller('brands')
@ApiTags('brands')
export class BrandController {
    constructor(
        private brandService: BrandsService,
    ){}

    @Get()
    findAll(){
        return this.brandService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.brandService.findOne(id);
    }

    @Post()
    async create(@Body() body: CreateBrandDto){
        return await this.brandService.create(body);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: UpdateBrandDto){
        return await this.brandService.update(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.brandService.delete(id);
    }
}