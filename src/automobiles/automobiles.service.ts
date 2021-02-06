import { Injectable, NotFoundException } from '@nestjs/common';
import { Automobile } from './automobile.entity';
import { UpdateAutomobileDto } from './dtos/update.automobile.dto';

@Injectable()
export class AutomobilesService {
  private automobiles: Automobile[] = [];
  create(dto: Automobile): Automobile {
    dto.id = Math.random().toString(36).substr(2, 9); // generates an unique id,
    const automobile = new Automobile(dto.id, dto.color, dto.brand, dto.plate);
    this.automobiles.push(automobile);
    return automobile;
  }

  update(id: string, dto: UpdateAutomobileDto): Automobile {
    const automobile = this.automobiles.find(
      (automobile) => automobile.id === id,
    );
    if (!automobile) {
      throw new NotFoundException('Automobile not found');
    }
    automobile.color = dto.color;
    automobile.brand = dto.brand;
    automobile.plate = dto.plate;
    return automobile;
  }

  delete(id: string): Automobile {
    let automobile = this.automobiles.find(
      (automobile) => automobile.id === id,
    );
    if (!automobile) {
      throw new NotFoundException('Automobile not found');
    }
    automobile = null;
    return automobile;
  }
}
