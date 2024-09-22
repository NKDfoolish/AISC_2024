import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TypeService } from "../services/type.service";
import { CreateTypeDto } from "../dto/create-type.dto";
import { UpdateTypeDto } from "../dto/update-type.dto";

@Controller('types')
@ApiTags('types')
export class TypeController {
    constructor(
        private typeService: TypeService,
    ){}

    @Get()
    findAll(){
        return this.typeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.typeService.findOne(id);
    }

    @Post()
    async create(@Body() body: CreateTypeDto){
        return await this.typeService.create(body);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: UpdateTypeDto){
        return await this.typeService.update(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.typeService.delete(id);
    }
}