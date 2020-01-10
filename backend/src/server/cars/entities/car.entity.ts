import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Manufacturer } from './manufacturer.entity';
import { Owner } from './owner.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(type => Manufacturer, manufacturer => manufacturer.cars)
  manufacturer: Manufacturer;

  @Column()
  price: number;

  @Column()
  firstRegistration: Date;

  @OneToMany(type => Owner, owner => owner.car, { cascade: ['insert', 'update', 'remove'] })
  owners: Owner[];
}
