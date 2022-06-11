import { sendSlackNotification } from "../utils";
import { constructSlackMessage, Emojis } from "../utils/constructSlackMessage";
import { CustomError } from "./customError";

export class ServerError extends CustomError {
  statusCode = 500;

  constructor(public error: Error) {
    super(error.message);

    Object.setPrototypeOf(this, ServerError.prototype);
  }

  serializeErrors() {
    const body = constructSlackMessage({
      notificationTitle: this.error.message,
      heading: this.error.message,
      icon_emoji: Emojis.error,
      message: this.error.stack,
    });
    sendSlackNotification(body, "errors");
    return { msg: this.error.message };
  }
}
