import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { Index } from 'typeorm';

@Index(['meterId'])


@Entity()
export class Energy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  meterId: string;

  @Column('float')
  consumption: number;

  @Column()
  unit: string;

  @CreateDateColumn()
  timestamp: Date;

  
}
