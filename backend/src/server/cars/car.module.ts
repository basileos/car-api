import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manufacturer } from './entities/manufacturer.entity';
import { Car } from './entities/car.entity';
import { Owner } from './entities/owner.entity';
import { CarsController } from './cars.controller';
import { CarService } from './services/car.service';
import { CarRepository } from './repositories/car.repository';
import { ManufacturerService } from './services/manufacturer.service';
import { OwnerService } from './services/owner.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Car,
      CarRepository,
      Manufacturer,
      Owner,
    ]),
  ],
  controllers: [CarsController],
  providers: [CarService, ManufacturerService, OwnerService],
})
export class CarModule {}
