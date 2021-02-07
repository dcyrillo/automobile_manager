import { Test, TestingModule } from '@nestjs/testing';
import { Automobile } from './automobile.entity';
import { AutomobilesService } from './automobiles.service';
import { UpdateAutomobileDto } from './dtos/update.automobile.dto';

describe('AutomobilesService', () => {
  let service: AutomobilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomobilesService],
    }).compile();

    service = module.get<AutomobilesService>(AutomobilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('create one driver', () => {
      const automobile = new Automobile(
        Math.random().toString(36).substr(2, 9),
        'blue',
        'fiat',
        'KOA5964',
      );
      const result = service.create(automobile);
      expect(result).toEqual(automobile);
    });
  });

  describe('delete', () => {
    it('it throws an error automobile not found', () => {
      const getResult = () => service.delete(undefined);
      expect(getResult).toThrow('Automobile not found');
    });
    it('delete an automobile', () => {
      const automobile = new Automobile(
        Math.random().toString(36).substr(2, 9),
        'blue',
        'fiat',
        'KOA5964',
      );
      const getResult = () =>
        service.delete(Math.random().toString(36).substr(2, 9));
      expect(getResult).toEqual(getResult);
    });
  });

  describe('getAll', () => {
    it('get all automobiles ', () => {
      const automobiles: Automobile[] = [];
      const result = service.getAll();
      expect(service.getAll);
      expect(result).toEqual(automobiles);
    });
  });

  describe('getByBrand', () => {
    it('get all automobiles by one specific brand', () => {
      const automobiles: Automobile[] = [];
      const result = service.getByBrand('fiat');
      expect(result).toEqual(automobiles);
    });
  });

  describe('getByColor', () => {
    it('get all automobiles by one specific color', () => {
      const automobiles: Automobile[] = [];
      const result = service.getByColor('azul');
      expect(result).toEqual(automobiles);
    });
  });

  describe('update', () => {
    it('it throws an error drivers not found', () => {
      const dto: UpdateAutomobileDto = new UpdateAutomobileDto(
        'blue',
        'fiat',
        'KOA5964',
      );
      const getResult = () => service.update(undefined, dto);
      expect(getResult).toThrow('Automobile not found');
    });
    it('it returned an automobile updated', () => {
      const automobile = new Automobile(
        Math.random().toString(36).substr(2, 9),
        'blue',
        'fiat',
        'KOA5964',
      );
      const dto: UpdateAutomobileDto = new UpdateAutomobileDto(
        'blue',
        'fiat',
        'KOA5964',
      );
      const getResult = () => service.update(automobile.id, dto);
      expect(getResult).toStrictEqual(getResult);
    });
  });
});
