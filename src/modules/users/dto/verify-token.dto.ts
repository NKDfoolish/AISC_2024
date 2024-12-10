import { IsString, IsNotEmpty } from 'class-validator';

export class VerifyTokenDto {
  @IsNotEmpty()
  @IsString()
  token: string;
}