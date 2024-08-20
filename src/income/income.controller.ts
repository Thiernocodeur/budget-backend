import { Body, Controller, Post, Put, Param, Delete, Get } from '@nestjs/common';
import { IncomeService } from './income.service';
import { CreateIncomeDto } from './create-income.dto';
import { UpdateIncomeDto } from './update-income.dto';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Post()
  create(@Body() createIncomeDto: CreateIncomeDto) {
    console.log('Données reçues dans le contrôleur:', createIncomeDto);  // Vérifie les données ici
    return this.incomeService.create(createIncomeDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateIncomeDto: UpdateIncomeDto) {
    return this.incomeService.update(id, updateIncomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.incomeService.delete(id);
  }

  @Get()
  findAll() {
    return this.incomeService.findAll();
  }
}
