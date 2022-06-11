import { Schema, model } from "mongoose";
import { TableAttrs, TableDoc, TableModel } from "../interfaces";

const tableSchema = new Schema(
  {
    number: { type: String, required: true },
    seats: { type: Number, required: true },
    orders: [{ type: String, required: true }],
    vacantSeats: { type: Number, required: true },
  },
  { timestamps: true }
);

tableSchema.set("versionKey", "version");

tableSchema.statics.build = (attrs: TableAttrs) => {
  return new Table(attrs);
};

export const Table = model<TableDoc>("table", tableSchema);
