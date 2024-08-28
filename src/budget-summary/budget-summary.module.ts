import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetSummaryController } from './budget-summary.controller';
import { IncomeService } from '../income/income.service';
import { ExpenseService } from '../expense/expense.service';
import { Income } from '../income/income.entity';
import { Expense } from '../expense/expense.entity';
import { ExpenseModule } from '../expense/expense.module'; // Vérifiez le chemin

@Module({
  imports: [
    TypeOrmModule.forFeature([Income, Expense]),
    ExpenseModule, // Importez le module des dépenses
  ],
  controllers: [BudgetSummaryController],
  providers: [IncomeService, ExpenseService],
})
export class BudgetSummaryModule {}
