import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class UpdateAutomobileDto {
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
    example: 'cadillac',
  })
  @IsString()
  @IsNotEmpty()
  brand: string;
}
