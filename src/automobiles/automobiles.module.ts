import { Module } from '@nestjs/common';
import { Automobile } from './automobile.entity';
import { AutomobilesController } from './automobiles.controller';
import { AutomobilesService } from './automobiles.service';

@Module({
  imports: [Automobile],
  controllers: [AutomobilesController],
  providers: [AutomobilesService],
  exports: [AutomobilesService, Automobile],
})
export class AutomobilesModule {}
