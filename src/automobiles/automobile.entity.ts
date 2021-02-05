import { ApiProperty } from '@nestjs/swagger';

export class Automobile {
  id: string;

  plate: string;

  @ApiProperty({
    type: String,
  })
  color: string;

  brand: string;
}
