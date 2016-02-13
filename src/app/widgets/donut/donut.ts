import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {TimeDataFactory} from '../../dashboard/dashboardPanel/factories/TimeDataFactory';
import {DonutFragmentFactory} from './factories/donutFragmentFactory';


@Component ({
  selector: 'ws-donut',
  providers: [],
  directives: [],
  pipes: [],
  styles: [require ('./template/donut.css')],
  template: require ('./template/donut.html')
})
export class Donut {
  @Input () time;
  @Input () timeData: TimeDataFactory;
  @Output () onTimeResetClick = new EventEmitter<any> ();
  @Input () donutFragments: Array<DonutFragmentFactory>;
  public timeToDisplay: number;
  private donutMorrisWidget;

  constructor() {
  }

  ngOnChanges(changes) {
    if (changes.time) {
      this.timeToDisplay = changes.time.currentValue;
    }
  };

  ngOnInit() {
    let morris = window['Morris'];
    this.donutMorrisWidget = morris.Donut ({
      element: 'dashboard-donut-chart',
      data: this.donutFragments,
      resize: true
    });
  }

  /*
   ngDoCheck(){

   }
   */

  onClick($event) {
    this.onTimeResetClick.emit ('RESET_BUTTON_CLICKED');
    $event.stopPropagation ();
  }
}
