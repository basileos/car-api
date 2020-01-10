import { ApplicationException } from './application.exception';

// NOTE: Infrastructure exception i.e. DB failure, Http Request Failure
export class InfrastructureException extends ApplicationException {
  constructor(error: string) {
    super(error || 'Infrastructure Error');

    Object.setPrototypeOf(this, InfrastructureException.prototype);
  }
}
