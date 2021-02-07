import { Injectable } from '@nestjs/common';
import { Activity } from './activity.entity';

@Injectable()
export class ActivitiesService {
  private activities: Activity[] = [];

  create(dto: Activity): Activity {
    dto.id = Math.random().toString(36).substr(2, 9); // generates an unique id,
    const activity = new Activity(
      dto.id,
      new Date(Date.now()),
      dto.description,
      dto.automobile,
      dto.driver,
      true,
    );
    this.activities.push(activity);
    return activity;
  }
}
