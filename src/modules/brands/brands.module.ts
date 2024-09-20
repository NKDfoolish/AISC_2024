import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/database/entities/brand.entity';
import { BrandsService } from './services/brands.service';
import { BrandController } from './controllers/brands.controller';

@Module({
    imports: [TypeOrmModule.forFeature([
        Brand
    ])],
    providers:[BrandsService],
    controllers:[BrandController],
})
export class BrandsModule {}
