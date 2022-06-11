import { Document, Model } from "mongoose";

interface ProductAttrs {
  name: string;
  images: string[];
  price: number;
  addons: {
    name: string;
    price: number;
  }[];
  spiceLevel: boolean;
  processingTime: number;
  disable?: boolean;
}

interface ProductModel extends Model<ProductDoc> {
  build(attrs: ProductAttrs): ProductDoc;
}

/**
 * An interface that describes the properties that a Product document has
 */
interface ProductDoc extends Document {
  _id: string;
  name: string;
  images: string[];
  price: number;
  addons: {
    name: string;
    price: number;
  }[];
  spiceLevel: boolean;
  processingTime: number;
  disable?: boolean;
}

export { ProductDoc, ProductAttrs, ProductModel };
