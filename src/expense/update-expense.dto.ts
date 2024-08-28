import { IsNumber, IsOptional, IsString, IsDateString, Min } from 'class-validator';

export class UpdateExpenseDto {
  @IsOptional()
  @IsString()
    // Exemple de validation de longueur
  readonly title?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)  // Exemple de validation pour s'assurer que le montant est positif
  readonly montant?: number;

  @IsOptional()
  @IsDateString()
  readonly date?: string;  // Si vous souhaitez également mettre à jour la date
}
