// NOTE: Abstract Application exception
export abstract class ApplicationException extends Error {
  constructor(error?: string) {
    super(error || 'Application Error');

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ApplicationException.prototype);
  }
}
