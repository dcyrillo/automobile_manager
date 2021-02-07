import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Automobile } from '../automobiles/automobile.entity';
import { Driver } from '../drivers/driver.entity';

export class Activity {
  id: string;

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    example: '2020-11-21T06:20:32.232Z',
    description: `It's a date that was request the activity`,
  })
  dateStart: Date;

  @ApiProperty({
    description:
      'A brief description of motion that driver are using the automobile',
    type: 'string',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    example: '2020-11-21T06:20:32.232Z',
    description: `It's a date that was finish the activity`,
  })
  dateFinish: Date;

  @ApiProperty({
    type: 'boolean',
    description: `This variabe says if the driver are using an automobile`,
  })
  isUsing: boolean;

  @ApiProperty({
    type: 'object',
    description: `Driver object`,
    example: ` { 
    "id": "utfz9oqup",
    "name": "Pedro,
    }`,
  })
  @IsNotEmpty()
  driver: Driver;

  @ApiProperty({
    type: 'object',
    description: `Automobile object`,
    example: ` {
      "id": "rucp59uky",
      "plate": "xxx9999",
      "brand": "fiat",
      "color": "preto"
  }`,
  })
  @IsNotEmpty()
  automobile: Automobile;

  constructor(
    id: string,
    dateStart: Date,
    description: string,
    automobile: Automobile,
    driver: Driver,
    isUsing: boolean,
    dateFinish: Date,
  ) {
    this.id = id;
    this.dateStart = dateStart;
    this.description = description;
    this.driver = driver;
    this.automobile = automobile;
    this.isUsing = isUsing;
    this.dateFinish = dateFinish;
  }
}
