import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CarOwnerDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsDateString()
  readonly purchaseDate: Date;
}
