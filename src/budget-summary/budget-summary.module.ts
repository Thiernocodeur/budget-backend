import { Module } from '@nestjs/common';
import { IncomeModule } from '../income/income.module';
import { ExpenseModule } from '../expense/expense.module';
import { BudgetSummaryController } from './budget-summary.controller';

@Module({
  imports: [IncomeModule, ExpenseModule], // Assurez-vous que les modules sont importés
  controllers: [BudgetSummaryController],
})
export class BudgetSummaryModule {}

