import { Body, Controller, Post, Put, Param, Delete, Get } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './create-expense.dto';
import { UpdateExpenseDto } from './update-expense.dto';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  create(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expenseService.create(createExpenseDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateExpenseDto: UpdateExpenseDto) {
    return this.expenseService.update(id, updateExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.expenseService.delete(id);
  }

  @Get()
  findAll() {
    return this.expenseService.findAll();
  }
}
