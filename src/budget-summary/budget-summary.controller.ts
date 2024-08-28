import { Controller, Get } from '@nestjs/common';
import { IncomeService } from '../income/income.service';
import { ExpenseService } from '../expense/expense.service';

@Controller('budget-summary')
export class BudgetSummaryController {
  constructor(
    private readonly incomeService: IncomeService,
    private readonly expenseService: ExpenseService,
  ) {}

  @Get()
  async getSummary() {
    const incomes = await this.incomeService.findAll();
    const expenses = await this.expenseService.findAll();

    const totalIncome = incomes.reduce((acc, income) => acc + income.montant, 0);
    const totalExpense = expenses.reduce((acc, expense) => acc + expense.montant, 0);
    const remainingBudget = totalIncome - totalExpense;

    return {
      totalIncome,
      totalExpense,
      remainingBudget,
    };
  }
}
