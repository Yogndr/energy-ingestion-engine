import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Energy } from './energy.entity';
import { EnergyService } from './energy.service';
import { EnergyController } from './energy.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Energy])],
  providers: [EnergyService],
  controllers: [EnergyController],
})
export class EnergyModule {}
