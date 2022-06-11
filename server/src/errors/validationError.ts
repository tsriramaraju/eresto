import { CustomError } from "./customError";

export class ValidationError extends CustomError {
  statusCode = 418;

  constructor(public msg: string) {
    super(msg);

    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  serializeErrors() {
    return { msg: this.msg };
  }
}
