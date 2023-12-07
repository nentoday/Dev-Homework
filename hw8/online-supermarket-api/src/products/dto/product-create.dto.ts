import { IsString, IsNumber, IsPositive } from 'class-validator';

export class ProductCreateDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsNumber()
  @IsPositive()
  price: number;
}