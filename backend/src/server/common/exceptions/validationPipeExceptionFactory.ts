import { ValidationError } from '@nestjs/common';

import { ValidationException } from './validation.exception';

export function validationPipeExceptionFactory(
  validationErrors: ValidationError[],
): ValidationException {
  return new ValidationException(
    validationErrors.map(err => ({
      property: err.property,
      errors: Object.values(err.constraints),
    })),
   );
}
