import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterActive} from '../../router-active/router-active';

@Component ({
  selector: 'ws-menu-panel',
  providers: [],
  directives: [
    ...ROUTER_DIRECTIVES, RouterActive
  ],
  pipes: [],
  styles: [require ('./template/menuPanel.css')],
  template: require ('./template/menuPanel.html')
})
export class MenuPanel {
  constructor() {
  }

  ngOnInit() {

  }

}
