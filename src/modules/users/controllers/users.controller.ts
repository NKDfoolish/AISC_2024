import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Session, UseGuards } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { AuthService } from "../services/auth.service";
import { SignInDto } from "../dto/sign-in.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { RolesGuard } from "src/guards/roles.guard";
import { Roles } from "../decorators/roles.decorator";
import { CurrentUser } from "../decorators/current-user.decorator";
import { User } from "src/database/entities/user.entity";

@Controller('users')
export class UserController {
    constructor(
        private userService: UsersService,
        private authService: AuthService,
    ){}

    // @UseGuards(RolesGuard)
    // @Roles(['ADMIN'])
    @Get()
    findAll(){
      // test decorator custom =))
      // console.log( "current user: "+ currentUser.role + "---" + currentUser.userName);
      
      return this.userService.findAll();
    }

    // @UseGuards(RolesGuard)
    // @Roles(['ADMIN'])
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.userService.findOne(id);
    }

    // @UseGuards(RolesGuard)
    // @Roles(['ADMIN'])
    @Patch(':id')
    update(@Param('id') id: string, @Body() body: UpdateUserDto) {
      return this.userService.update(id, body);
    }

    // @UseGuards(RolesGuard)
    // @Roles(['ADMIN'])
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.userService.delete(id);
    }

    @Post('sign-up')
    async signUp(@Body() body: CreateUserDto) {
      return await this.authService.signUp(body);
    }

    @Post('sign-in')
    async signIn(
      @Body() body: SignInDto,
      @Session() session: Record<string, any>,
    ){      
      const user = await this.authService.signIn(body.userName, body.passWord);
      session.userId = user.id;
      return user
    }

    @Post('sign-out')
    async signOut(@Session() session: Record<string, any>){
      delete session.userId;
    }
}
