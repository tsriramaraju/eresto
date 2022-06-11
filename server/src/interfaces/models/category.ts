import { Document, Model } from "mongoose";

interface CategoryAttrs {
  name: string;
  description: string;
  image: string;
}

/**
 * An interface that describes the properties that a Category document has
 */
interface CategoryDoc extends Document {
  _id: string;
  number: string;
  seats: number;
  orders: string[];
  vacantSeats: number;
}

export { CategoryDoc, CategoryAttrs };
