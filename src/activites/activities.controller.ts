import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
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
  @ApiForbiddenResponse({
    description: 'This driver already schedule in one activity',
  })
  createOne(@Body() dto: Activity): Activity {
    return this.service.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Finish an activity ' })
  @ApiOkResponse({ description: 'Finished an activity' })
  @ApiNotFoundResponse({ description: `Activity not found` })
  @HttpCode(HttpStatus.OK)
  finish(@Param() params): Activity {
    return this.service.finish(params.id);
  }

  @Get('')
  @ApiOperation({ summary: 'Get all activities' })
  @ApiOkResponse({ description: 'Response contains all activities' })
  getAll(): Activity[] {
    return this.service.getAll();
  }
}
