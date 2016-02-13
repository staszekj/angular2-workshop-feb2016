import {Injectable, EventEmitter} from 'angular2/core';

@Injectable ()
export class TimeService {
  public time: number = 0;
  public onTimeChange = new EventEmitter<any> ();

  constructor() {
    window.setInterval (() => {
      this.time += 1;
      this.onTimeChange.emit ('');
    }, 1000);

    console.log ('SJA: TimeService object was created');
  }

}
