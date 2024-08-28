import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';
import { Expense } from './expense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  controllers: [ExpenseController],
  providers: [ExpenseService],
  exports: [ExpenseService], // Export the service if needed in other modules
})
export class ExpenseModule {}
