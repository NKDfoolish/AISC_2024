import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from "class-validator";

export class UpdateDonationDto {
    @IsOptional()
    @IsNumber()
    quantity: number;

    @IsOptional()
    @IsNumber()
    total_score: number;
}