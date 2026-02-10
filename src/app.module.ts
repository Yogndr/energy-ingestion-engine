import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnergyModule } from './energy/energy.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'energy',
      password: 'energy',
      database: 'energy_db',
      autoLoadEntities: true,
      synchronize: true, // only for assignment
    }),
    EnergyModule,
  ],
})
export class AppModule {}
