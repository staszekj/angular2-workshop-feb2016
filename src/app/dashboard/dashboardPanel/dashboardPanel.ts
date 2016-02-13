import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {TimeDataFactory} from './factories/TimeDataFactory';
import {Donut} from '../../widgets/donut/donut';
import {DonutFragmentFactory} from '../../widgets/donut/factories/donutFragmentFactory';

import {DashboardService} from './services/DashboardService';
import {TimeService} from '../../common/services/TimeService';
import {TemperatureStorageService} from '../../common/services/TemperatureStorageService';


@Component ({
  selector: 'dashboard',
  providers: [
    DashboardService
  ],
  directives: [Donut, RouterLink],
  pipes: [],
  styles: [require ('./template/dashboardPanel.css')],
  template: require ('./template/dashboardPanel.html')
})
export class DashboardPanel {
  private time: number;
  private timeData: TimeDataFactory;
  private donutFragments: Array<DonutFragmentFactory>;

  constructor(private dashboardService: DashboardService,
              private timeService: TimeService,
              private temperatureStorageService: TemperatureStorageService) {
    this.time = this.timeService.time;
    this.timeData = new TimeDataFactory (this.timeService.time);
  }

  ngOnInit() {
    this.timeService.onTimeChange.subscribe (() => {
      this.time = this.timeService.time;
      this.timeData = new TimeDataFactory (this.timeService.time);
    });

    this.donutFragments = this.dashboardService.toDonutData (
      this.temperatureStorageService.temperatures);
  }

  onTimeReset($event) {
    console.log ('onTimeReset: ', $event);
    this.timeService.time = 0;
  }

  onClick($event) {
    console.log ('onClick', $event);
    this.timeService.time = 100;
  }

}
