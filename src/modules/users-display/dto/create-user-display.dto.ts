import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDisplayDto {
    @IsNotEmpty()
    @IsString()
    user_id: string;

    @IsNotEmpty()
    @IsNumber()
    total_score: number;

    @IsNotEmpty()
    @IsNumber()
    rank: number;
}