import { Schema, model } from "mongoose";
import { CategoryAttrs, CategoryDoc } from "../interfaces";

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

categorySchema.set("versionKey", "version");

export const Category = model<CategoryDoc>("category", categorySchema);
