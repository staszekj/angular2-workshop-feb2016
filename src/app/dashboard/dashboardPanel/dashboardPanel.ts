import {Component, provide} from 'angular2/core';
import {Http} from 'angular2/http';

import {TimeDataFactory} from './factories/TimeDataFactory';

import {DashboardService} from './services/DashboardService';

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

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {

  }

  //ngDoCheck() {
  //
  //}

}
