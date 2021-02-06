import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomobilesModule } from './automobiles/automobiles.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [AutomobilesModule, DriversModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
