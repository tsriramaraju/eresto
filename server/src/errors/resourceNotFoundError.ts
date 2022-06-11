import { CustomError } from './customError';

export class ResourceNotFoundError extends CustomError {
  statusCode = 420;
  reason = 'Requested resource not found';

  constructor(public msg?: string) {
    super(msg ? msg : 'Resource not found');

    Object.setPrototypeOf(this, ResourceNotFoundError.prototype);
  }

  serializeErrors() {
    return { msg: this.msg || this.reason };
  }
}
