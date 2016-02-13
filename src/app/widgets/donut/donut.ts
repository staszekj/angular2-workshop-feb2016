import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {TimeDataFactory} from '../../dashboard/dashboardPanel/factories/TimeDataFactory';


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
  public timeToDisplay: number;

  constructor() {
  }

  ngOnChanges(changes) {
    console.log ('Changes: ', changes);
    if (changes.time) {
      this.timeToDisplay = changes.time.currentValue;
    }
  };

  ngOnInit() {
  }

  onClick($event) {
    this.onTimeResetClick.emit ('RESET_BUTTON_CLICKED');
    $event.stopPropagation ();
  }
}
