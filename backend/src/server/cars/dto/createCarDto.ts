import {
  ArrayNotEmpty,
  IsArray,
  IsDateString, IsInstance,
  IsNotEmpty,
  IsNumber, ValidateNested,
} from 'class-validator';
import { CarOwnerDto } from './carOwnerDto';

export class CreateCarDto {

  @IsNumber()
  @IsNotEmpty()
  readonly manufacturerId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsDateString()
  @IsNotEmpty()
  readonly firstRegistration: Date;

  @IsArray()
  @ArrayNotEmpty()
  readonly owners: CarOwnerDto[];

}
