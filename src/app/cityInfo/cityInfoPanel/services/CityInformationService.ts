import {Injectable} from 'angular2/core';
import {URLSearchParams, Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {CityInformationFactory} from '../factories/CityInformationFactory';

@Injectable ()
export class CityInformationService {

  constructor(public http: Http) {
  }

  cityInformation(cityName: string): Observable<CityInformationFactory> {
    let params = new URLSearchParams ();

    params.set ('q',
      'select * from weather.forecast where woeid in ' +
      '(select woeid from geo.places(1) where text="' +
      cityName +
      '")');

    params.set ('format', 'json');

    return this.http.get ('https://query.yahooapis.com/v1/public/yql', {search: params})
      .map (res => {
        return this.createCityInformation (res.json ().query.results.channel);
      });
  }

  private createCityInformation(yahooChannel) {
    return new CityInformationFactory (yahooChannel.location.city +
      ', ' +
      yahooChannel.location.country,
      yahooChannel.item.condition.temp,
      yahooChannel.wind.speed);
  }
}
