import { Document, Model } from "mongoose";

enum SpiceLevel {
  medium,
  hot,
  low,
}

interface Cart {
  _id: string;
  items: {
    name: string;
    image: string;
    price: number;
    addons: string[];
    quantity: number;
    spiceLevel?: SpiceLevel;
  }[];
  finalPrice: number;
}

interface UserAttrs {
  name: string;
  mobile: number;
}

interface UserModel extends Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

/**
 * An interface that describes the properties that a User document has
 */
interface UserDoc extends Document {
  _id: string;
  name: string;
  cart: Cart;
  mobile: number;
  orders: string[];
}

export { UserDoc, UserAttrs, UserModel, Cart, SpiceLevel };
