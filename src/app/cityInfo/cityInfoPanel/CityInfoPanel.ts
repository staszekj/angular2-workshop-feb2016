import {Component, Input} from 'angular2/core';

import {CityInformationFactory} from './factories/CityInformationFactory';

import {CityInformationService} from './services/CityInformationService';
import {TimeService} from '../../common/services/TimeService';
import {TemperatureStorageService} from '../../common/services/TemperatureStorageService';

@Component ({
  selector: 'city-info',
  providers: [
    CityInformationService
  ],
  directives: [],
  pipes: [],
  styles: [require ('./template/cityInfoPanel.css')],
  template: require ('./template/cityInfoPanel.html')
})
export class CityInfoPanel {
  public city: string;
  public cityInformations: Array<CityInformationFactory>;

  constructor(private timeService: TimeService,
              private temperatureStorageService: TemperatureStorageService,
              private cityInformationService: CityInformationService) {
    this.cityInformations = [
      new CityInformationFactory ('Magic City of Time',
        this.timeService.time,
        this.timeService.time),
      new CityInformationFactory ('Second City',
        100,
        200)
    ];

  }

  ngOnInit() {
    this.timeService.onTimeChange.subscribe (() => {
      this.cityInformations[0].temperature = this.timeService.time;
      this.cityInformations[0].wind = this.timeService.time % 10;
    });

    this.temperatureStorageService.addTemperature ('Krakow', 20);
    this.temperatureStorageService.addTemperature ('Katowice', 22);
  }
}
