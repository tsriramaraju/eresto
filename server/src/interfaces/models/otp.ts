import { Model, Document } from "mongoose";

/**
 * Interface that describes the properties that are required to create a new OTP Document
 */
interface OTPAttrs {
  mobile: number;
  name: string;

  sessionId: string;
}

/**
 * Interface that describes the methods that a OTP Model has
 */
interface OTPModel extends Model<OTPDoc> {
  build(attrs: OTPAttrs): OTPDoc;
}

/**
 * Interface that describes the properties hat a OTP Document has
 */
interface OTPDoc extends Document {
  _id: string;

  mobile: number;
  name: string;

  sessionId: string;
}

export { OTPDoc, OTPModel, OTPAttrs };
