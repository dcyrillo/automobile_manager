import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity.entity';

@Controller('activities')
@ApiTags('activities')
export class ActivitiesController {
  constructor(public service: ActivitiesService) {}

  @Post()
  @ApiCreatedResponse({ type: Activity })
  @ApiOperation({ summary: 'Create an activity' })
  @ApiNotFoundResponse({ description: `Automobile not found` })
  createOne(@Body() dto: Activity): Activity {
    return this.service.create(dto);
  }
}
