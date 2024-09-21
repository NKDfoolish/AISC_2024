import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'src/database/entities/type.entity';
import { TypeService } from './services/type.service';
import { TypeController } from './controllers/type.controller';
import { Donation } from 'src/database/entities/donation.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        Type
    ])],
    providers:[TypeService],
    controllers:[TypeController],
})
export class TypeModule {}
