import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Driver } from './driver.entity';
import { DriversService } from './drivers.service';
import { UpdateDriverDto } from './dtos/update.drive.dto';

@Controller('drivers')
export class DriversController {
  constructor(public service: DriversService) {}

  @Post()
  @ApiCreatedResponse({ type: Driver })
  @ApiOperation({ summary: 'Create a drive' })
  createOne(@Body() dto: Driver): Driver {
    return this.service.create(dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete driver' })
  @ApiOkResponse({ description: 'Delete driver' })
  @ApiNotFoundResponse({ description: `Driver not found` })
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }

  @Get('')
  @ApiOperation({ summary: 'Get all drivers' })
  @ApiOkResponse({ description: 'Response contains all drivers' })
  getAll(): Driver[] {
    return this.service.getAll();
  }

  @Get('/name/:name')
  @ApiOperation({ summary: 'Get drivers by name' })
  @ApiOkResponse({
    description: 'Response contains all drivers by name',
  })
  getDriversByName(@Param('name') name: string): Driver[] {
    return this.service.getByName(name);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a driver' })
  @ApiOkResponse({ description: 'Update a driver' })
  @ApiNotFoundResponse({ description: `Driver not found` })
  @HttpCode(HttpStatus.OK)
  updateOne(@Param() params, @Body() dto: UpdateDriverDto): Driver {
    return this.service.update(params.id, dto);
  }
}
