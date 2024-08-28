import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column()
  montant: number;

  @Column()
  date: string; // Utilisez le type Date si vous travaillez avec des objets Date
}
