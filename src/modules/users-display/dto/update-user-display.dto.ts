import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from "class-validator";

export class UpdateUserDisplayDto {
    @IsOptional()
    @IsNumber()
    total_score: number;

    @IsOptional()
    @IsNumber()
    rank: number;
}