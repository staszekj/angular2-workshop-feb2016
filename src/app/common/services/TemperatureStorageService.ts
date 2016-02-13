import {Injectable} from 'angular2/core';

import {TemperatureStorageFactory} from '../factories/TemperatureStorageFactory';

@Injectable ()
export class TemperatureStorageService {
  public temperatures: Array<TemperatureStorageFactory>;

  constructor() {
    this.temperatures = [];
  }

  addTemperature(cityName, temperature) {
    this.temperatures.push (new TemperatureStorageFactory (cityName, temperature));
  }

}

