import { CreateCarDto } from './createCarDto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateCarDto extends CreateCarDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id: string;
}
