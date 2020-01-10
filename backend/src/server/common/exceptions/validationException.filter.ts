import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { ValidationException } from './validation.exception';
import { Response } from 'express';

@Catch(ValidationException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch({ validationErrors, message }: ValidationException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    response
      .status(400)
      .json({
        validationErrors,
        message,
      });
  }
}
