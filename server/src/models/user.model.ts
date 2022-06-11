import { Schema, model } from "mongoose";
import { UserAttrs, UserDoc, UserModel } from "../interfaces";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    mobile: { type: Number, required: true, unique: true },
    orders: [{ type: String, required: true, ref: "order" }],
    cart: {
      finalPrice: { type: Number, required: true },
      items: [
        {
          name: { type: String, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
          addons: { type: [String], required: true },
          quantity: { type: Number, required: true },
          spiceLevel: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

userSchema.set("versionKey", "version");

export const User = model<UserDoc>("user", userSchema);
