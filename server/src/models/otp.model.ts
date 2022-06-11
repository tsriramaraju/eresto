import { Schema, model } from "mongoose";
import { OTPAttrs, OTPDoc, OTPModel } from "../interfaces";

const otpSchema = new Schema(
  {
    name: String,
    sessionId: String,

    mobile: { type: String, unique: true, sparse: true },
    date: { type: Date, default: Date.now(), expires: "3m" },
  },
  {
    timestamps: true,
  }
);
otpSchema.set("versionKey", "version");

const OTP = model<OTPDoc>("otp", otpSchema);

export { OTP };
