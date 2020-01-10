import { Injectable } from '@nestjs/common';
import { Car } from '../entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CarRepository } from '../repositories/car.repository';
import { CreateCarDto } from '../dto/createCarDto';
import { throwValidationException } from '../../common/helpers/exception.helper';
import { Owner } from '../entities/owner.entity';
import { ManufacturerService } from './manufacturer.service';
import { UpdateCarDto } from '../dto/updateCarDto';
import { FindConditions } from 'typeorm/find-options/FindConditions';

@Injectable()
export class CarService {

  constructor(
    @InjectRepository(Car)
    private readonly carRepository: CarRepository,
    private readonly manufacturerService: ManufacturerService,
  ) {
  }

  async findAll(): Promise<Car[]> {
    return this.carRepository.findAll();
  }

  async findById(id: string): Promise<Car> {
    return this.carRepository.findById(id);
  }

  async create(command: CreateCarDto): Promise<Car> {
    await this.validateCreateCarCommand(command);
    const car = this.buildDbCar(command);
    return await this.carRepository.save(car);
  }

  async update(command: UpdateCarDto): Promise<Car> {
    await this.validateCreateCarCommand(command);
    const car = this.buildDbCar(command);
    return await this.carRepository.save({...car, ...command});
  }

  async updateByCriteria(criteria: FindConditions<Car>) {
    return await this.carRepository.updatePrices(criteria);
  }

  private async validateCreateCarCommand(command: CreateCarDto | UpdateCarDto) {
    const manufacturer = await this.manufacturerService.findOneById(command.manufacturerId);
    if (!manufacturer) {
      throwValidationException('manufacturerId', 'There is no manufacturer with provided id');
    }
  }

  private buildDbCar(command): Car {
    const car = new Car();
    car.manufacturer = command.manufacturerId;
    car.price = command.price;
    car.firstRegistration = command.firstRegistration;
    car.owners = command.owners.map(owner => new Owner(owner.name, owner.purchaseDate));
    return car;
  }
}
