import { ValidationException } from '../exceptions';

export function throwValidationException(property: string, message: string) {
  throw new ValidationException([
    {
      property,
      errors: [message],
    },
  ]);
}
