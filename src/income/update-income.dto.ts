import { IsOptional, IsNumber, IsString, IsDateString } from 'class-validator';

export class UpdateIncomeDto {
  @IsOptional()
  @IsString()
  readonly titre?: string;

  @IsOptional()
  @IsNumber()
  readonly montant?: number;

  @IsOptional()
  @IsDateString()
  readonly date?: string;
}
