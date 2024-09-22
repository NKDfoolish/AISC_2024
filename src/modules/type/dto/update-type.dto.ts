import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from "class-validator";

export class UpdateTypeDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsNumber()
    co2: number;
}