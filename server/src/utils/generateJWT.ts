import { sign, verify } from "jsonwebtoken";
import { BadRequestError } from "../errors";
import secrets from "../config/secrets";
// import { JWTEmployeePayload, JWTUserPayload } from "../interfaces";

/**
 * Returns a valid jwt token
 * @param payload user details
 * @param exp jwt expiry in seconds
 */
export const generateJWT = (payload: any) => {
  const token = sign({ payload: payload }, secrets.jwtSecret!, {
    expiresIn: "15d",
  });
  return token;
};

/**
 * Return user data as payload
 * @param token jwt token
 */
export const decodeJWT = (token: string) => {
  try {
    const decoded = verify(token, secrets.jwtSecret!) as string | { payload: any };

    if (typeof decoded == "object") return decoded.payload;
  } catch (error) {
    throw new BadRequestError(error);
  }
};

//  FIXME : add interface later for payload
