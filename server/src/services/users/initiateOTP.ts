import { DatabaseConnectionError } from "../../errors";
import { OTP } from "../../models";
import { generateOTP } from "../../utils";

/**
 * Creates an OTP record if not exists
 */
export const initiateOTP = async (data: { id: number; name: string; sessionId: string }) => {
  const { id, name, sessionId } = data;

  try {
    /**
     * check for existing document with given id
     */

    const exists = await OTP.findOne({ mobile: id });

    /**
     *  if document already exists return the available OTP
     */

    if (exists) return exists;

    /**
     *   if document doesn't exist create a new record
     */

    const otpDocument = await new OTP({ name, mobile: id, sessionId }).save();

    return otpDocument;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
