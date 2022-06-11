import { sendSlackNotification } from ".";

export const sendWhatsAppMessage = (message: string, mobile: number) => {
  try {
    sendSlackNotification({ text: message, username: mobile.toString() }, "whatsapp");
    console.log("sending whatsApp message");
  } catch (error) {
    console.log(error);
  }
};

//  TODO : complete it at the end
