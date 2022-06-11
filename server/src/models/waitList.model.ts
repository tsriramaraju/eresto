import { Schema, model } from "mongoose";
import { WaitListAttrs, WaitListDoc } from "../interfaces";

const waitListSchema = new Schema(
  {
    queue: [
      {
        name: { type: String, required: true },
        mobile: { type: Number, required: true },
        guests: { type: Number, required: true },
        customerId: { type: String, required: true, unique: true },
      },
    ],
  },
  { timestamps: true }
);

waitListSchema.set("versionKey", "version");

export const WaitList = model<WaitListDoc>("waitList", waitListSchema);
