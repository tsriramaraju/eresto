import { sendSlackNotification } from "../utils";
import { constructSlackMessage, Emojis } from "../utils/constructSlackMessage";
import { CustomError } from "./customError";

export class DatabaseConnectionError extends CustomError {
  statusCode = 520;
  reason = "Error connecting to database, Please try again later";

  constructor(public msg?: string) {
    super(msg ? msg : "Error connecting to db");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    const body = constructSlackMessage({
      notificationTitle: "Database Error",
      icon_emoji: Emojis.error,
      message: this.msg,
    });
    sendSlackNotification(body, "errors");
    return { msg: this.msg || this.reason };
  }
}
