// src/expense/dto/update-expense.dto.ts
import { IsNumber, IsOptional, IsString, IsDateString, Min } from 'class-validator';

export class UpdateExpenseDto {
  @IsOptional()
  @IsString()
  readonly titre?: string;  // Utilisez 'titre'

  @IsOptional()
  @IsNumber()
  @Min(0)
  readonly montant?: number;

  @IsOptional()
  @IsDateString()
  readonly date?: string;
}
