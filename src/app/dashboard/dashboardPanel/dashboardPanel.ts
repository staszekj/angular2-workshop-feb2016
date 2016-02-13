import {Component} from 'angular2/core';

import {DashboardService} from './services/DashboardService';
import {TimeService} from '../../common/services/TimeService';
import {TemperatureStorageService} from '../../common/services/TemperatureStorageService';

@Component ({
  selector: 'dashboard',
  providers: [
    DashboardService
  ],
  directives: [],
  pipes: [],
  styles: [require ('./template/dashboardPanel.css')],
  template: require ('./template/dashboardPanel.html')
})
export class DashboardPanel {
  constructor(private dashboardService: DashboardService,
              private timeService: TimeService,
              private temperatureStorageService: TemperatureStorageService) {

  }

  ngOnInit() {
    this.timeService.onTimeChange.subscribe (() => {
      let currentTime = this.timeService.time;
      this.temperatureStorageService.addTemperature ('Krakow', currentTime);
      console.log ('Current time', this.timeService.time);
    });

  }

}
