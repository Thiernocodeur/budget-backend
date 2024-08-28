import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomeModule } from './income/income.module'; // Import the IncomeModule
import { ExpenseModule } from './expense/expense.module'; // Import the ExpenseModule
import { BudgetSummaryModule } from './budget-summary/budget-summary.module'; // Import the BudgetSummaryModule

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [path.join(__dirname, '**/*.entity.{js,ts}')],

        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    IncomeModule, // Add this
    ExpenseModule, // Add this
    BudgetSummaryModule, // Add this
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
