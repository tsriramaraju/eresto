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
  name: string;
  description: string;
  image: string;
}

export { CategoryDoc, CategoryAttrs };
