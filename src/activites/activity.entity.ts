import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';

export class Activity {
  id: string;

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    example: '2020-11-21T06:20:32.232Z',
    description: `It's a date that was request the activity`,
  })
  @IsNotEmpty()
  @IsString()
  dateStart: string;

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
    description: `Identification of driver by unique ids`,
    example: ` {
        "id": "etw3nx4i7",
    }`,
  })
  @IsNotEmpty()
  driverId: string;

  @ApiProperty({
    type: 'object',
    description: `Identification of automobile by unique id`,
    example: `  {
        "id": "mhwk67ziy",
        
    }`,
  })
  @IsNotEmpty()
  automobileId: string;
}
