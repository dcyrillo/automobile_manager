import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class UpdateDriverDto {
  @ApiProperty({
    type: String,
    description: `Driver's name `,
    example: 'Carlos Eduardo Magalhaes Cyrillo',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
