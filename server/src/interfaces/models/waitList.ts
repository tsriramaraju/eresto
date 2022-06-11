import { Document, Model } from "mongoose";

interface WaitListAttrs {
  name: string;
  mobile: number;
  guests: number;
  customerId: string;
}

/**
 * An interface that describes the properties that a WaitList document has
 */
interface WaitListDoc extends Document {
  _id: string;
  queue: WaitListAttrs[];
}

export { WaitListDoc, WaitListAttrs };
