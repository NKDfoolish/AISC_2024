import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from 'ormconfig';
import { UsersModule } from './modules/users/users.module';
import { CurrentUserMiddleware } from './modules/users/middlewares/current-user.middleware';
import { BrandsModule } from './modules/brands/brands.module';
import { RankingModule } from './modules/ranking/ranking.module';
import { UserDisplay } from './database/entities/user-display.entity';
import { TypeModule } from './modules/type/type.module';
import { RewardModule } from './modules/reward/reward.module';
import { DonationModule } from './modules/donation/donation.module';

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
    UserDisplay,
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
