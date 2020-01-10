import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CarService } from './services/car.service';
import { Car } from './entities/car.entity';
import { CreateCarDto } from './dto/createCarDto';
import { UpdateCarDto } from './dto/updateCarDto';
import { Manufacturer } from './entities/manufacturer.entity';
import { OwnerService } from './services/owner.service';
import { Between, DeleteResult, LessThan } from 'typeorm';
import moment = require('moment');

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carService: CarService,
    private readonly ownerService: OwnerService,
  ) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return await this.carService.findAll();
  }

  @Get(':id/manufacturer')
  async getManufacturer(@Param('id') id: string): Promise<Manufacturer> {
    const car = await this.carService.findById(id);
    if (!car) {
      throw new NotFoundException();
    }
    return car.manufacturer;
  }

  @Get('update-owners-and-prices')
  async updateOwnersAndPrices(): Promise<boolean> {
    await Promise.all([
      this.ownerService.removeByCriteria({purchaseDate: LessThan(moment.utc(new Date()).subtract(18, 'month').toDate())}),
      this.carService.updateByCriteria({firstRegistration:
          Between(moment.utc(new Date()).subtract(18, 'month').toDate(), moment.utc(new Date()).subtract(12, 'month').toDate())}),
    ]);
    return true;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Car> {
    const car = await this.carService.findById(id);
    if (!car) {
      throw new NotFoundException();
    }
    return car;
  }

  @Put()
  async update(@Body() command: UpdateCarDto): Promise<Car> {
    const car = await this.carService.findById(command.id);
    if (!car) {
      return await this.carService.create(command);
    }
    return await this.carService.update(command);
  }

  @Post()
  async create(@Body() command: CreateCarDto): Promise<Car> {
    return await this.carService.create(command);
  }
}
