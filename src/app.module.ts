import { Module } from '@nestjs/common';
import { ActivitiesModule } from './activites/activities.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomobilesModule } from './automobiles/automobiles.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [ActivitiesModule, AutomobilesModule, DriversModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
