import { Injectable } from '@nestjs/common';
import { Automobile } from 'src/automobiles/automobile.entity';
import { AutomobilesService } from 'src/automobiles/automobiles.service';
import { DriversService } from 'src/drivers/drivers.service';
import { Activity } from './activity.entity';

@Injectable()
export class ActivitiesService {
  private activities: Activity[] = [];
  public automobilesService: AutomobilesService;
  public driversService: DriversService;

  create(dto: Activity): Activity {
    dto.id = Math.random().toString(36).substr(2, 9); // generates an unique id,
    console.log(dto);
    const automobile: Automobile = this.automobilesService.findOneAutomobile(
      dto.automobileId,
    );
    this.driversService.findOne(dto.driverId);
    //  const automobile = new Automobile(dto.id, dto.color, dto.brand, dto.plate);
    // this.automobiles.push(automobile);
    return null;
  }
}
