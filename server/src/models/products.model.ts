import { Schema, model } from "mongoose";
import { ProductAttrs, ProductDoc, ProductModel } from "../interfaces";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    images: [{ type: String, required: true }],
    description: String,
    price: { type: Number, required: true },
    addons: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    spiceLevel: { type: Boolean, required: true },
    processingTime: { type: Number, required: true },
    disable: Boolean,
  },
  { timestamps: true }
);

productSchema.set("versionKey", "version");

productSchema.statics.build = (attrs: ProductAttrs) => {
  return new Product(attrs);
};

export const Product = model<ProductDoc>("product", productSchema);
