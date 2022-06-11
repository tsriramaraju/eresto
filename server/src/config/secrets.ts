import { config } from "dotenv";
import { join } from "path";
config();

if (!process.env.MONGO_URL) {
  throw new Error("MONGO_URI must be defined");
}

if (!process.env.JWT_KEY) {
  throw new Error("JWT_KEY must be defined");
}

// if (!process.env.GOOGLE_ID) {
//   throw new Error("GOOGLE_ID must be defined");
// }
// if (!process.env.GOOGLE_SECRET) {
//   throw new Error("GOOGLE_SECRET must be defined");
// }

if (!process.env.RAZOR_PAY_ID) {
  throw new Error("RAZOR_PAY_ID must be defined");
}
if (!process.env.RAZOR_PAY_KEY) {
  throw new Error("RAZOR_PAY_KEY must be defined");
}
if (!process.env.GOOGLE_AUTH) {
  throw new Error("GOOGLE_AUTH must be defined");
}

if (!process.env.RAZOR_PAY_SECRET) {
  throw new Error("RAZOR_PAY_SECRET must be defined");
}

if (!process.env.GOOGLE_CAPTCHA_KEY) {
  throw new Error("GOOGLE_CAPTCHA_KEY must be defined");
}
if (!process.env.GMAIL_PASSWORD) {
  throw new Error("GMAIL_PASSWORD must be defined");
}
if (!process.env.SLACK_SECRET) {
  throw new Error("SLACK_SECRET must be defined");
}

export default {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_KEY,
  razorPayID: process.env.RAZOR_PAY_ID,
  razorPaySecret: process.env.RAZOR_PAY_SECRET,
  razorPayKey: process.env.RAZOR_PAY_KEY,

  mongoURL: process.env.MONGO_URL,

  gmailPass: process.env.GMAIL_PASSWORD,
  slackSecret: process.env.SLACK_SECRET,

  // googleID: process.env.GOOGLE_ID,
  // googleSecret: process.env.GOOGLE_SECRET,

  googleAuth: process.env.GOOGLE_AUTH,
  googleCaptchaKey: process.env.GOOGLE_CAPTCHA_KEY,
};
