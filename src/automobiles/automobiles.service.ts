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

  delete(id: string): Automobile {
    const automobile = this.automobiles.find(
      (automobile) => automobile.id === id,
    );

    if (!automobile) {
      throw new NotFoundException('Automobile not found');
    }
    const i = this.automobiles.findIndex((obj) => obj.id === id);
    this.automobiles.splice(i, 1);
    return automobile;
  }

  getAll(): Automobile[] {
    return this.automobiles;
  }

  getByBrand(brand: string): Automobile[] {
    const auxAutomobiles = this.automobiles.filter(
      (automobile) => automobile.brand === brand,
    );
    return auxAutomobiles;
  }

  getByColor(color: string): Automobile[] {
    const auxAutomobiles = this.automobiles.filter(
      (automobile) => automobile.color === color,
    );
    return auxAutomobiles;
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
}
