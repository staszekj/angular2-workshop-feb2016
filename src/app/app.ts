import {Component, provide} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {TimeService} from './common/services/TimeService';
import {TemperatureStorageService} from './common/services/TemperatureStorageService';

import {MenuPanel} from './widgets/menu/menuPanel/MenuPanel';
import {DashboardPanel} from './dashboard/dashboardPanel/DashboardPanel';
import {CityInfoPanel} from './cityInfo/cityInfoPanel/CityInfoPanel';

/*
 * App Component
 * Top Level Component
 */
@Component ({
  selector: 'app',
  providers: [TimeService, TemperatureStorageService],
  directives: [...ROUTER_DIRECTIVES, MenuPanel],
  pipes: [],
  styles: [],
  template: `
      <ws-menu-panel></ws-menu-panel>
      <router-outlet></router-outlet>
  `
})
@RouteConfig ([
  {path: '/', component: DashboardPanel, name: 'Dashboard'},
  {path: '/dashboard', component: DashboardPanel, name: 'Dashboard'},
  {path: '/city-info', component: CityInfoPanel, name: 'CityInfo'},
  {path: '/**', redirectTo: ['Dashboard']}
])
export class App {
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor() {

  }
}
