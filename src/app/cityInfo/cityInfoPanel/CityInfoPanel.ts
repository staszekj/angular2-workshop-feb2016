import {Component} from 'angular2/core';

import {CityInformationFactory} from './factories/CityInformationFactory';

import {CityInformationService} from './services/CityInformationService';

@Component ({
  selector: 'city-info',
  providers: [
    CityInformationService
  ],
  directives: [],
  pipes: [],
  styles: [require ('./template/cityInfoPanel.css')],
  template: require ('./template/cityInfoPanel.html')
})
export class CityInfoPanel {
  constructor(private cityInformationService: CityInformationService) {
  }

  ngOnInit() {

  }

}
