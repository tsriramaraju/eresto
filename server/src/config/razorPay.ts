import Razorpay from "razorpay";
import secrets from "./secrets";

export const razorPayInstance = new Razorpay({
  key_id: secrets.razorPayID,
  key_secret: secrets.razorPayKey,
});
