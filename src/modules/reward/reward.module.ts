import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reward } from 'src/database/entities/reward.entity';
import { RewardService } from './services/reward.service';
import { RewardController } from './controllers/reward.controller';
import { Brand } from 'src/database/entities/brand.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        Reward
    ])],
    providers:[RewardService],
    controllers:[RewardController],
})
export class RewardModule {}
