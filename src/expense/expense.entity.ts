// src/expense/expense.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('expense')
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'titre' })  // Utilisez 'titre' pour correspondre à la base de données
  titre: string;

  @Column({ name: 'montant', type: 'float' })
  montant: number;

  @Column({ name: 'date' })
  date: string;
}
