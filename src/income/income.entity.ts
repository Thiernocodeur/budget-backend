import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'titre' })  // Assure-toi que le nom de la colonne est correct
  titre: string;

  @Column('decimal')
  amount: number;

  @Column('date')
  date: string;
}
