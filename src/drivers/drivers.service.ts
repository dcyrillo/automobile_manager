import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { Driver } from './driver.entity';
import { UpdateDriverDto } from './dtos/update.drive.dto';

@Injectable()
export class DriversService {
  private drivers: Driver[] = [];
  create(dto: Driver): Driver {
    dto.id = Math.random().toString(36).substr(2, 9); // generates an unique id,
    const driver = new Driver(dto.id, dto.name);
    this.drivers.push(driver);
    return driver;
  }

  delete(id: string): Driver {
    const driver = this.drivers.find((driver) => driver.id === id);

    if (!driver) {
      throw new NotFoundException('Driver not found');
    }
    const i = this.drivers.findIndex((obj) => obj.id === id);
    this.drivers.splice(i, 1);
    return driver;
  }

  getAll(): Driver[] {
    return this.drivers;
  }

  getByName(name: string): Driver[] {
    return this.drivers.filter((driver) => driver.name === name);
  }

  update(id: string, dto: UpdateDriverDto): Driver {
    const driver = this.drivers.find((drive) => drive.id === id);
    if (!driver) {
      throw new NotFoundException('Driver not found');
    }
    driver.name = dto.name;
    return driver;
  }
}
