import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('decimal')
  montant: number;

  @Column({ type: 'date', nullable: true })
  date: string;
}
