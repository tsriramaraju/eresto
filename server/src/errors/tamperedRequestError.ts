import { CustomError } from './customError';

export class TamperedRequestError extends CustomError {
  statusCode = 419;
  reason = 'Request is tampered, please use valid one';

  constructor(public msg?: string) {
    super(msg ? msg : 'Tampered Request');

    Object.setPrototypeOf(this, TamperedRequestError.prototype);
  }

  serializeErrors() {
    return { msg: this.msg || this.reason };
  }
}
