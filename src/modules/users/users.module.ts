import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { UserController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([
        User
    ])],
    providers:[UsersService, AuthService],
    controllers:[UserController],
    exports: [UsersService],
})
export class UsersModule {}
