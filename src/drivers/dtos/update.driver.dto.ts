import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDriverDto {
  @ApiProperty({
    type: String,
    description: `Driver's name `,
    example: `Carlos Eduardo Magalhães Cyrillo`,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
