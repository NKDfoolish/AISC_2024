import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from "class-validator";

export class CreateBrandDto {
    @IsNotEmpty()
    @IsString()
    brand_name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsNumber()
    total_amount_voucher: number;

    @IsOptional()
    @IsNumber()
    total_remaining_voucher: number;

    @Type(() => Date)
    sign_date: Date;

    @IsOptional()
    @IsNumber()
    views: number;
}