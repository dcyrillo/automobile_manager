import { Automobile } from './automobile.entity';
import faker from 'faker';
import { NotFoundException } from '@nestjs/common';
import { UpdateAutomobileDto } from './dtos/update.automobile.dto';

export class AutomobileRepository {
  private automobiles: Array<Automobile>;

  createOne(dto: Automobile): Automobile {
    dto.id = faker.random.uuid();
    const i = this.automobiles.push(dto);
    return this.automobiles[i];
  }

  updateOne(id: string, dto: UpdateAutomobileDto): Automobile {
    const automobile = this.automobiles.find((i) => i.id === id);
    if (!automobile) {
      throw new NotFoundException('Automobile not found');
    }
    automobile.plate = dto.color;
    automobile.brand = dto.brand;
    automobile.color = dto.color;
    return automobile;
  }

  save(dto: Automobile): Automobile {
    const i = this.automobiles.push(dto);
    return this.automobiles[i];
  }
}
