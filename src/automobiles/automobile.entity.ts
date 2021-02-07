import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class Automobile {
  id: string;

  @ApiProperty({
    type: String,
    description: `The automobile's plate`,
    example: 'KOA5964',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z]{3}[0-9]{4}$/, {
    message: 'Plate potentially invalid',
  })
  plate: string;

  @ApiProperty({
    type: String,
    description: `The automobile's color `,
    example: 'blue',
  })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    type: String,
    description: `The automobile's brand `,
    example: 'toyota',
  })
  @IsString()
  @IsNotEmpty()
  brand: string;

  constructor(id: string, color: string, brand: string, plate: string) {
    this.id = id;
    this.plate = plate;
    this.brand = brand;
    this.color = color;
  }
}
