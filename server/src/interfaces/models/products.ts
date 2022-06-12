import { Document, Model } from "mongoose";

interface ProductAttrs {
  name: string;
  images: string[];
  description: string;
  price: number;
  addons: {
    name: string;
    price: number;
  }[];
  spiceLevel: boolean;
  processingTime: number;
  disable?: boolean;
  category: string;
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
  description: string;
  images: string[];
  price: number;
  addons: {
    name: string;
    price: number;
  }[];
  spiceLevel: boolean;
  processingTime: number;
  disable?: boolean;
  category: string;
}

export { ProductDoc, ProductAttrs, ProductModel };
