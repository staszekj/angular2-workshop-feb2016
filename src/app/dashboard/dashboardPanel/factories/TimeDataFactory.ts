import {EventEmitter} from 'angular2/core';

export class TimeDataFactory {
  /*

   _time: number;
   get time(): number {
   return this._time;
   }
   set time(value: number) {
   this._time = value;
   this.timeChange.emit(value);
   }
   timeChange: EventEmitter<number> = new EventEmitter<number>();

   */

  constructor(public time: number) {
    //this.time = time;
  }
}
