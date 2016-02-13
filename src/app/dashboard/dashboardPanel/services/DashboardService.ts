import {Injectable} from 'angular2/core';

import {TemperatureStorageFactory} from '../../../common/factories/TemperatureStorageFactory';
import {DonutFragmentFactory} from '../../../widgets/donut/factories/donutFragmentFactory';

let _ = require ('lodash');

@Injectable ()
export class DashboardService {

  constructor() {

  }

  toDonutData(temperatrures: Array<TemperatureStorageFactory>) {
    return _.map (temperatrures, (temperature: TemperatureStorageFactory) => {
      return new DonutFragmentFactory (temperature.cityName, temperature.temperature);
    });
  }
}

