import { Type } from "class-transformer";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateRankingDto {
    @IsOptional()
    @IsString()
    ranking_month: string;

    @IsOptional()
    @IsNumber()
    total_score: number;

    @IsOptional()
    @IsNumber()
    rank: number;
}