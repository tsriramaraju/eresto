import { Schema, model } from "mongoose";
import { RazorPayOrderDoc } from "../interfaces";

const razorPaySchema = new Schema(
  {
    razorPayOrder: {
      id: String,
      entity: String,
      amount: Number,
      amount_paid: Number,
      amount_due: Number,
      currency: String,
      receipt: String,
      offer_id: String,
      status: String,
      attempts: Number,
      notes: [String],
      created_at: Number,
    },
    items: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        addons: { type: [String], required: true },
        quantity: { type: Number, required: true },
        spiceLevel: { type: Number, required: true },
        status: { type: String, required: true },
      },
    ],
    finalPrice: { type: Number, required: true },
    status: { type: String, required: true },
    note: { type: String, required: true },
    customerId: { type: String, required: true, ref: "customer" },
    tableId: { type: String, required: true, ref: "table" },
    deliveredAt: { type: Date, required: true },
  },
  { timestamps: true }
);

razorPaySchema.set("versionKey", "version");

export const RazorPayOrder = model<RazorPayOrderDoc>("razorPayOrder", razorPaySchema);
