import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateExpenseDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsNumber()
  readonly amount?: number;
}
