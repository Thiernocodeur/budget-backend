import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Expense])],
    providers: [ExpenseService],
    controllers: [ExpenseController],
    exports: [ExpenseService], // Assurez-vous que ExpenseService est exporté
  })
  export class ExpenseModule {}
  
