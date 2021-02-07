import { Test, TestingModule } from '@nestjs/testing';
import { Automobile } from '../automobiles/automobile.entity';
import { Driver } from '../drivers/driver.entity';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity.entity';

describe('ActivitiesService', () => {
  let activityService: ActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivitiesService],
    }).compile();

    activityService = module.get<ActivitiesService>(ActivitiesService);
  });

  it('should be defined', () => {
    expect(activityService).toBeDefined();
  });

  describe('create', () => {
    it('create an activity', () => {
      const driver = new Driver(
        Math.random().toString(36).substr(2, 9),
        'pedro',
      );
      const automobile = new Automobile(
        Math.random().toString(36).substr(2, 9),
        'blue',
        'fiat',
        'KOA5964',
      );

      const activity = new Activity(
        Math.random().toString(36).substr(2, 9),
        new Date(Date.now()),
        'delivery',
        automobile,
        driver,
        false,
        undefined,
      );
      const getResult = () => activityService.create(activity);
      expect(getResult).toEqual(getResult);
    });
  });

  describe('getAll', () => {
    it('get all activities', () => {
      const activities: Activity[] = [];
      const result = activityService.getAll();
      expect(activityService.getAll);
      expect(result).toEqual(activities);
    });
  });
});
