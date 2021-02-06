import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Delete, Get, UsePipes } from '@nestjs/common/decorators';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Automobile } from './automobile.entity';
import { AutomobilesService } from './automobiles.service';
import { UpdateAutomobileDto } from './dtos/update.automobile.dto';

@Controller('automobiles')
@ApiTags('automobiles')
export class AutomobilesController {
  constructor(public service: AutomobilesService) {}

  @Post()
  @ApiCreatedResponse({ type: Automobile })
  @ApiOperation({ summary: 'Create an automobile' })
  createOne(@Body() dto: Automobile): Automobile {
    return this.service.create(dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an automobile' })
  @ApiOkResponse({ description: 'Delete an automobile' })
  @ApiNotFoundResponse({ description: `Automobile not found` })
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }

  @Get('')
  @ApiOperation({ summary: 'Get all automobiles' })
  @ApiOkResponse({ description: 'Response contains all automobiles' })
  getAll(): Automobile[] {
    return this.service.getAll();
  }

  @Get('brands/:brand')
  @ApiOperation({ summary: 'Get automobiles by brands' })
  @ApiOkResponse({
    description: 'Response contains all automobiles by brand',
  })
  getAutomobileByBrand(@Param('brand') brand: string): Automobile[] {
    return this.service.getByBrand(brand);
  }

  @Get('colors/:color')
  @ApiOperation({ summary: 'Get automobiles by colors' })
  @ApiOkResponse({
    description: 'Response contains all automobiles by colors',
  })
  getAutomobileByColor(@Param('color') color: string): Automobile[] {
    return this.service.getByColor(color);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an automobile' })
  @ApiOkResponse({ description: 'Update an automobile' })
  @ApiNotFoundResponse({ description: `Automobile not found` })
  @HttpCode(HttpStatus.OK)
  updateOne(@Param() params, @Body() dto: UpdateAutomobileDto): Automobile {
    return this.service.update(params.id, dto);
  }
}
