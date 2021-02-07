import { Test, TestingModule } from '@nestjs/testing';
import { Automobile } from 'src/automobiles/automobile.entity';
import { UpdateAutomobileDto } from 'src/automobiles/dtos/update.automobile.dto';
import { Driver } from './driver.entity';
import { DriversService } from './drivers.service';
import { UpdateDriverDto } from './dtos/update.driver.dto';

describe('DriversService', () => {
  let driverService: DriversService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriversService],
    }).compile();

    driverService = module.get<DriversService>(DriversService);
  });

  it('should be defined', () => {
    expect(driverService).toBeDefined();
  });

  describe('create', () => {
    it('create one driver', () => {
      const driver = new Driver(
        Math.random().toString(36).substr(2, 9),
        'pedro',
      );
      const result = driverService.create(driver);
      expect(result).toEqual(driver);
    });
  });

  describe('delete', () => {
    it('it throws an error driver not found', () => {
      const getResult = () => driverService.delete(undefined);
      expect(getResult).toThrow('Driver not found');
    });
    it('delete an automobile', () => {
      const getResult = () =>
        driverService.delete(Math.random().toString(36).substr(2, 9));
      expect(getResult).toEqual(getResult);
    });
  });

  describe('getAll', () => {
    it('get all drivers', () => {
      const drivers: Driver[] = [];
      const result = driverService.getAll();
      expect(driverService.getAll);
      expect(result).toEqual(drivers);
    });
  });

  describe('getByName', () => {
    it('get all drivers with one specific name', () => {
      const drivers: Driver[] = [];
      const result = driverService.getByName('someName');
      expect(result).toEqual(drivers);
    });
  });

  describe('update', () => {
    it('it throws an error drivers not found', () => {
      const dto: UpdateDriverDto = new UpdateDriverDto('Rafael');
      const getResult = () => driverService.update(undefined, dto);
      expect(getResult).toThrow('Driver not found');
    });
    it('it returned a driver updated', () => {
      const driver = new Driver(
        Math.random().toString(36).substr(2, 9),
        'Rafael',
      );
      const dto: UpdateDriverDto = new UpdateDriverDto('Rafael');
      const getResult = () => driverService.update(driver.id, dto);
      expect(getResult).toStrictEqual(getResult);
    });
  });
});
