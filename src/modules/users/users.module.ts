import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { UserController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { Ranking } from 'src/database/entities/ranking.entity';
import { Donation } from 'src/database/entities/donation.entity';
import { UserDisplay } from 'src/database/entities/user-display.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        User, Ranking, Donation, UserDisplay
    ])],
    providers:[UsersService, AuthService],
    controllers:[UserController],
    exports: [UsersService],
})
export class UsersModule {}
