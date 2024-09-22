import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from 'ormconfig';
import { UsersModule } from './modules/users/users.module';
import { CurrentUserMiddleware } from './modules/users/middlewares/current-user.middleware';
import { BrandsModule } from './modules/brands/brands.module';
import { RankingModule } from './modules/ranking/ranking.module';
import { TypeModule } from './modules/type/type.module';
import { RewardModule } from './modules/reward/reward.module';
import { DonationModule } from './modules/donation/donation.module';
import { UsersDisplayModule } from './modules/users-display/users-display.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...DatabaseConfig,
      autoLoadEntities: true,
      logging: true,
    }),
    UsersModule,
    BrandsModule,
    RankingModule,
    UsersDisplayModule,
    TypeModule,
    RewardModule,
    DonationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CurrentUserMiddleware)
      .forRoutes('*');
  }
}
