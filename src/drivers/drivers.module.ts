import { Module } from '@nestjs/common';
import { Driver } from './driver.entity';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';

@Module({
  imports: [Driver],
  controllers: [DriversController],
  providers: [DriversService],
  exports: [Driver, DriversService],
})
export class DriversModule {}
