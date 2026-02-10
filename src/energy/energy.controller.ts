import { Controller, Post, Body, Get } from '@nestjs/common';
import { EnergyService } from './energy.service';
import { CreateEnergyDto } from './dto/create-energy.dto';

@Controller('energy')
export class EnergyController {
  constructor(private readonly energyService: EnergyService) {}

  @Post('ingest')
  ingestEnergy(@Body() body: CreateEnergyDto) {
    return this.energyService.ingest(body);
  }

  @Post('batch')
ingestBatch(@Body() data: CreateEnergyDto[]) {
  return this.energyService.ingestBatch(data);
}


  @Get()
  getAll() {
    return this.energyService.findAll();
  }
}
