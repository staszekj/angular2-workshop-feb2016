import {Injectable} from 'angular2/core';

import {TemperatureStorageFactory} from '../factories/TemperatureStorageFactory';

@Injectable ()
export class TemperatureStorageService {
  public temperatures: Array<TemperatureStorageFactory>;

  constructor() {
    this.temperatures = [];
    console.log ('SJA: TemperatureStorageService object was created');
  }

  addTemperature(cityName, temperature) {
    this.temperatures.push (new TemperatureStorageFactory (cityName, temperature));
  }

}

