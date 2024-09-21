import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from "class-validator";

export class CreateRewardDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    brand_id: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    score: number;

    @IsNotEmpty()
    @IsNumber()
    total_remaining: number;

    @Type(() => Date)
    expired_date: Date;
}