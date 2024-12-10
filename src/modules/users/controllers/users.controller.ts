import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from "../services/users.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { AuthService } from "../services/auth.service";
import { SignInDto } from "../dto/sign-in.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../decorators/current-user.decorator';
import { User } from '../../../database/entities/user.entity';
import { VerifyTokenDto } from '../dto/verify-token.dto';

@Controller('users')
@ApiTags('users')
export class UserController {
    constructor(
        private userService: UsersService,
        private authService: AuthService,
    ){}

    // @UseGuards(RolesGuard)
    // @Roles(['ADMIN'])
    @Get()
    findAll(@CurrentUser() currentUser: User) {
      // test decorator custom =))
      // console.log( "current user: "+ currentUser.role + "---" + currentUser.userName);
      
      return this.userService.findAll();
    }

    // @UseGuards(JwtAuthGuard)
    // @Roles(['ADMIN'])
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.userService.findOne(id);
    }

    // @UseGuards(JwtAuthGuard)
    // @Roles(['ADMIN'])
    @Patch(':id')
    update(@Param('id') id: string, @Body() body: UpdateUserDto) {
      return this.userService.update(id, body);
    }

    // @UseGuards(JwtAuthGuard)
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
    async signIn(@Body() body: SignInDto){
      return await this.authService.signIn(body.userName, body.passWord);
    }

    @Post('verify-token')
    async verifyToken(@Body() jwt: VerifyTokenDto) {
      if (!jwt.token) {
        throw new UnauthorizedException('No token provided');
      }

      try {
        const user = await this.authService.verifyToken(jwt.token);
        return {
          message: 'Token is valid',
          user: {
            id: user.id,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            telephone: user.telephone,
            role: user.role,
          },
        };
      } catch (error) {
        throw new UnauthorizedException('Invalid token');
      }
    }
}
