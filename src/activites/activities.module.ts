import { Module } from '@nestjs/common';
import { AutomobilesModule } from '../automobiles/automobiles.module';
import { DriversModule } from '../drivers/drivers.module';
import { ActivitiesController } from './activities.controller';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity.entity';

@Module({
  imports: [Activity, DriversModule, AutomobilesModule],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
})
export class ActivitiesModule {}
