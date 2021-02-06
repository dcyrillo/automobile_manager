import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
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

  @Patch(':id')
  @ApiOperation({ summary: 'Update an automobile' })
  @ApiOkResponse({ description: 'Update an automobile' })
  @ApiNotFoundResponse({ description: `Automobile not found` })
  @HttpCode(HttpStatus.OK)
  updateOne(@Param() params, @Body() dto: UpdateAutomobileDto): Automobile {
    return this.service.update(params.id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Delete an automobile' })
  @ApiNotFoundResponse({ description: `Automobile not found` })
  async delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
