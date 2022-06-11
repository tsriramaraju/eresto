import { sendSlackNotification } from ".";

export const sendSMS = (message: string, mobile: number) => {
  try {
    sendSlackNotification({ text: message, username: mobile.toString() }, "message");
    console.log("sending sms");
  } catch (error) {
    console.log(error);
  }
};

//  TODO : complete it at the end
