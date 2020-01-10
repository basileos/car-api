import { EntityRepository, Repository } from 'typeorm';
import { Car } from '../entities/car.entity';
import { FindConditions } from 'typeorm/find-options/FindConditions';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {

  async findAll() {
    return await this.find({ relations: ['manufacturer', 'owners'] });
  }

  async findById(id: string) {
    return await this.findOne({ relations: ['manufacturer', 'owners'] });
  }

  async updatePrices(criteria: FindConditions<Car>) {
    return this.createQueryBuilder()
      .update(Car)
      .set({ price: () => 'price * 0.8' })
      .where(criteria)
      .execute();
  }
}
