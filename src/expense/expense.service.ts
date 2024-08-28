import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './expense.entity';
import { CreateExpenseDto } from './create-expense.dto';
import { UpdateExpenseDto } from './update-expense.dto';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
  ) {}

  create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    const expense = this.expenseRepository.create(createExpenseDto);
    return this.expenseRepository.save(expense);
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto): Promise<Expense> {
    await this.expenseRepository.update(id, updateExpenseDto);
    return this.expenseRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.expenseRepository.delete(id);
  }

  findAll(): Promise<Expense[]> {
    return this.expenseRepository.find();
  }
}
