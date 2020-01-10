import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class Owner {

  constructor(name: string, purchaseDate: Date) {
    this.name = name;
    this.purchaseDate = purchaseDate;
  }

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(type => Car, car => car.owners)
  car: Car;

  @Column()
  purchaseDate: Date;
}
