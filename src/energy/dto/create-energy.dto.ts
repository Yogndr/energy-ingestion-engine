import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateEnergyDto {
  @IsString()
  @IsNotEmpty()
  meterId: string;

  @IsNumber()
  consumption: number;

  @IsString()
  @IsNotEmpty()
  unit: string;
}
