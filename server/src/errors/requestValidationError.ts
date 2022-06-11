// import { ValidationError } from 'express-validator';
import { CustomError } from "./customError";

export class RequestValidationError extends CustomError {
  statusCode = 418;

  constructor(public errors: any[]) {
    super("Invalid request parameters");

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    const errors = this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });

    return {
      msg: "Validation error, please enter valid inputs",
      errors: errors,
    };
  }
}
