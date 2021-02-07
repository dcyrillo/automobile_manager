import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Activity } from './activity.entity';

@Injectable()
export class ActivitiesService {
  private activities: Activity[] = [];

  create(dto: Activity): Activity {
    const auxActivity = this.activities.find(
      (activity) =>
        activity.driver.id === dto.driver.id && activity.isUsing === true,
    );
    if (auxActivity) {
      throw new ForbiddenException(
        'This driver already schedule in one activity',
      );
    }

    dto.id = Math.random().toString(36).substr(2, 9); // generates an unique id,
    const activity = new Activity(
      dto.id,
      new Date(Date.now()),
      dto.description,
      dto.automobile,
      dto.driver,
      true,
      null,
    );
    this.activities.push(activity);
    return activity;
  }

  finish(id: string): Activity {
    const activity = this.activities.find((activity) => activity.id === id);

    if (!activity) {
      throw new NotFoundException('Automobile not found');
    }
    activity.dateFinish = new Date(Date.now());
    activity.isUsing = false;
    return activity;
  }

  getAll(): Activity[] {
    return this.activities;
  }
}
