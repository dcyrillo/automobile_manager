import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomobilesModule } from './automobiles/automobiles.module';

@Module({
  imports: [AutomobilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
