import { Schema, model } from "mongoose";
import { OrderAttrs, OrderDoc, OrderModel, OrderStatus } from "../interfaces";

const orderSchema = new Schema(
  {
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

orderSchema.set("versionKey", "version");

export const Order = model<OrderDoc>("order", orderSchema);
