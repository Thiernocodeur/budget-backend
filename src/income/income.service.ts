import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Income } from './income.entity';
import { CreateIncomeDto } from './create-income.dto';
import { UpdateIncomeDto } from './update-income.dto';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    private incomeRepository: Repository<Income>,
  ) {}

  async create(createIncomeDto: CreateIncomeDto): Promise<Income> {
    console.log('Données avant sauvegarde:', createIncomeDto);  // Vérifie les données ici
    const income = this.incomeRepository.create(createIncomeDto);
    return this.incomeRepository.save(income);
  }

  async update(id: number, updateIncomeDto: UpdateIncomeDto): Promise<Income> {
    const result = await this.incomeRepository.update(id, updateIncomeDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Income with ID ${id} not found`);
    }
    return this.incomeRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    const result = await this.incomeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Income with ID ${id} not found`);
    }
  }

  findAll(): Promise<Income[]> {
    return this.incomeRepository.find();
  }
}
