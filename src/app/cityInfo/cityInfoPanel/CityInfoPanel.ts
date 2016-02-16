import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Validators} from 'angular2/common';

import {CityInformationFactory} from './factories/CityInformationFactory';

import {CityInformationService} from './services/CityInformationService';
import {TimeService} from '../../common/services/TimeService';
import {TemperatureStorageService} from '../../common/services/TemperatureStorageService';

import {CustomValidator} from '../../common/validators/CustomValidator';

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
  public city: string;
  public cityInformations: Array<CityInformationFactory>;
  public cityInformationForm: ControlGroup;
  public cityNameControl: AbstractControl;

  constructor(private timeService: TimeService,
              private temperatureStorageService: TemperatureStorageService,
              private cityInformationService: CityInformationService,
              private fb: FormBuilder) {

    this.cityInformations = [
      new CityInformationFactory ('Magic City of Time',
        this.timeService.time,
        this.timeService.time)
    ];

    this.cityInformationForm = fb.group ({
      cityName: [
        '',
        Validators.compose ([
          CustomValidator.startsWithNumber,
          CustomValidator.containsSpecialCharacters
        ]),
        CustomValidator.cityDoesNotExist
      ]
    });

    this.cityNameControl = this.cityInformationForm.controls['cityName'];
  }

  ngOnInit() {
    this.timeService.onTimeChange.subscribe (() => {
      this.cityInformations[0].temperature = this.timeService.time;
      this.cityInformations[0].wind = this.timeService.time % 10;
    });
  }

  /**
   * Submit action handler.
   * Note that thanks to [(ngModel)] directive we don't need to use value.cityName in handler,
   * instead we can use this.city directly.
   * @param {object} value
   */
  onSubmit(value: {[key:string]: string}): void {
    console.log ('See what\'s inside submitted value', value);
    console.log ('See what\'s inside this.city', this.city);

    this.cityInformationService.cityInformation (this.city)
      .subscribe ((cityInformation) => {
        this.addCityInformation (cityInformation);
        this.temperatureStorageService.addTemperature (cityInformation.name,
          cityInformation.temperature);
      }, (e) => {
        console.log ('Error occured: ', JSON.stringify (e));
      });
  }

  /**
   * Check if form/form input is valid.
   * Note special handling of untouched state.
   * @param {AbstractControl} control form or form item to check if is valid
   * @returns {boolean}
   */
  isInvalid(control: AbstractControl): boolean {
    return !control.valid && !control.pending && (control.touched || (!control.touched && control.dirty));
  }

  private addCityInformation(cityInformation: CityInformationFactory) {
    let newCityInformation = new CityInformationFactory (cityInformation.name,
      cityInformation.temperature,
      cityInformation.wind);
    this.cityInformations.push (newCityInformation);
  }
}
