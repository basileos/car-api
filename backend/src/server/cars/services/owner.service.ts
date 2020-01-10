import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Owner } from '../entities/owner.entity';
import { FindConditions } from 'typeorm/find-options/FindConditions';

@Injectable()
export class OwnerService {

  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {
  }

  async removeByCriteria(criteria: FindConditions<Owner>): Promise<DeleteResult> {
    return await this.ownerRepository.delete(criteria);
  }
}
