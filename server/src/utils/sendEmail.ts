import { createTransport } from "nodemailer";
import { sendSlackNotification } from ".";
import secrets from "../config/secrets";

export const sendEmail = async (data: { to: string; subject: string; body: string }) => {
  try {
    // const { to, subject, body } = data;

    // const transporter = createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "hello996123@gmail.com",
    //     pass: secrets.gmailPass,
    //   },
    // });
    // const mailOptions = {
    //   from: "hello996123@gmail.com",
    //   to,
    //   subject,
    //   text: body,
    // };
    // const res = await transporter.sendMail(mailOptions);
    const res = "hello";
    //  FIXME : fix email sending
    return res;
  } catch (error) {
    console.log(secrets.gmailPass);
    await sendSlackNotification({ text: error }, "errors");
    console.log(error);
  }
};
