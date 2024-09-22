import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from "class-validator";

export class CreateRankingDto {
    @IsNotEmpty()
    @IsString()
    user_id: string;

    @IsNotEmpty()
    @IsString()
    ranking_month: string;

    @IsNotEmpty()
    @IsNumber()
    total_score: number;

    @IsOptional()
    @IsNumber()
    rank: number;
}