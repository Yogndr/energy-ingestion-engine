import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Energy } from './energy.entity';
import { CreateEnergyDto } from './dto/create-energy.dto';

@Injectable()
export class EnergyService {
  constructor(
    @InjectRepository(Energy)
    private energyRepo: Repository<Energy>,
  ) {}

  ingest(data: Partial<Energy>) {
    const record = this.energyRepo.create(data);
    return this.energyRepo.save(record);
  }

  ingestBatch(data: CreateEnergyDto[]) {
  const records = this.energyRepo.create(data);
  return this.energyRepo.save(records);
}


  findAll() {
    return this.energyRepo.find();
  }
}
