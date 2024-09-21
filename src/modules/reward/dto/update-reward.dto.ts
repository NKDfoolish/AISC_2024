import { Type } from "class-transformer";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateRewardDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    brand_id: string;

    @IsOptional()
    @IsString()
    phone: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsNumber()
    score: number;

    @IsOptional()
    @IsNumber()
    total_remaining: number;

    @IsOptional()
    @Type(() => Date)
    expired_date: Date;
}