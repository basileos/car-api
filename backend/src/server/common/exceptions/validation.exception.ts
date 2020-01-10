import { ApplicationException } from './application.exception';

export interface ValidationError {
  property: string;
  errors: string[];
}

export interface ValidationErrorsOptions {
  skipMessage?: boolean;
  message?: string;
}

// NOTE: Validation exception i.e. incorrect data entered by user
export class ValidationException extends ApplicationException {
  readonly validationErrors: ValidationError[];

  constructor(validationErrors: ValidationError[], option?: ValidationErrorsOptions) {
    if (!validationErrors) {
      throw new Error('validationErrors not defined');
    }

    super();
    this.validationErrors = validationErrors;
    this.message = 'Invalid Request Data';

    if (option && option.skipMessage) {
      this.message = '';
    }

    if (option && option.message) {
      this.message = option.message;
    }

    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}
