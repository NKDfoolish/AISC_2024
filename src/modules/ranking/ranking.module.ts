import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ranking } from 'src/database/entities/ranking.entity';
import { RankingService } from './services/ranking.service';
import { RankingController } from './controllers/ranking.controller';

@Module({
    imports: [TypeOrmModule.forFeature([
        Ranking
    ])],
    providers:[RankingService],
    controllers:[RankingController],
})
export class RankingModule {}
