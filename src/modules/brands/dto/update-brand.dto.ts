import { Type } from "class-transformer";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateBrandDto {
    @IsOptional()
    @IsString()
    brand_name: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    phone: string;

    @IsOptional()
    @IsString()
    password: string;

    @IsOptional()
    @IsNumber()
    total_amount_voucher: number;

    @IsOptional()
    @IsNumber()
    total_remaining_voucher: number;

    @IsOptional()
    @Type(() => Date)
    sign_date: Date;

    @IsOptional()
    @IsNumber()
    views: number;
}