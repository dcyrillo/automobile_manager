import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class Driver {
  id: string;

  @ApiProperty({
    type: String,
    description: `Driver's name `,
    example: `Carlos Eduardo Magalhães Cyrillo`,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
