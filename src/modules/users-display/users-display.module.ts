import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDisplay } from 'src/database/entities/user-display.entity';
import { UserDisplayService } from './services/userDisplay.service';
import { UserDisplayController } from './controllers/userDisplay.controller';

@Module({
    imports: [TypeOrmModule.forFeature([
        UserDisplay
    ])],
    providers:[UserDisplayService],
    controllers:[UserDisplayController],
})
export class UsersDisplayModule {}
