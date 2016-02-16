import {Control} from 'angular2/common';
import {Injectable} from 'angular2/core';

/**
 * Interface used by all Angular2 validators
 */
interface ValidationResult {
  [key: string]: boolean;
}

@Injectable ()
export class CustomValidator {

  /**
   * Simple validator for checking if provided value starts with number
   * @param {Control} control form input component
   * @returns {ValidationResult}
   */
  static startsWithNumber(control: Control): ValidationResult {
    if (control.value !== undefined &&
      control.value !== '' && !isNaN (control.value.charAt (0))) {
      return {
        startsWithNumber: true
      };
    }
    return null;
  }

  /**
   * Simple validator function which checks if value contains only letters
   * @param {Control} control form input component
   * @returns {ValidationResult}
   */
  static containsSpecialCharacters(control: Control): ValidationResult {
    if (control.value !== undefined &&
      control.value !== '' && !control.value.match (/^[a-zA-Z]+$/)) {
      return {
        containsSpecialCharacters: true
      };
    }
    return null;
  }

  /**
   * Async validator function sample
   * @param control control form input component
   * @returns {Promise<ValidationResult>}
   */
  static cityDoesNotExist(control: Control): Promise<ValidationResult> {
    return new Promise ((resolve, reject) => {
      setTimeout (() => {
        if (control.value === 'Krakuw') {
          resolve ({cityDoesNotExist: true});
        } else {
          resolve (null);
        }
      }, 1000);
    });
  }
}
