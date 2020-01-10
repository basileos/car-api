import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class Manufacturer {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({ type: 'bigint' })
  siret: number;

  @OneToMany(type => Car, car => car.manufacturer)
  cars: Car[];
}
