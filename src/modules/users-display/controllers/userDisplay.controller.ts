import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserDisplayService } from "../services/userDisplay.service";
import { CreateUserDisplayDto } from "../dto/create-user-display.dto";
import { UpdateUserDisplayDto } from "../dto/update-user-display.dto";

@Controller('user-displays')
@ApiTags('user-displays')
export class UserDisplayController {
    constructor(
        private userDisplayService: UserDisplayService,
    ){}

    @Get()
    findAll(){
        return this.userDisplayService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.userDisplayService.findOne(id);
    }

    @Post()
    async create(@Body() body: CreateUserDisplayDto){
        return await this.userDisplayService.create(body);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: UpdateUserDisplayDto){
        return await this.userDisplayService.update(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.userDisplayService.delete(id);
    }
}