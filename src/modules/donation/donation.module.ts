import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from 'src/database/entities/donation.entity';
import { DonationService } from './services/donation.service';
import { DonationController } from './controllers/donation.controller';
import { Type } from 'src/database/entities/type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        Donation
    ])],
    providers:[DonationService],
    controllers:[DonationController],
})
export class DonationModule {}
