import { Request } from "express";
import { verify } from "jsonwebtoken";
import secrets from "../config/secrets";
import { BadRequestError, ServerError } from "../errors";
import { JWTUserPayload } from "../interfaces";

export const currentUserService = (req: Request) => {
  let token;
  if (!req.headers) {
    throw new BadRequestError("Invalid headers");
  }

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(" ")[1];
    // Set token from cookie
  }

  // Make sure token exists
  if (!token) {
    throw new BadRequestError("Authentication token is not present");
  }

  try {
    const decodedData = verify(token, secrets.jwtSecret) as string | { payload: JWTUserPayload };

    if (typeof decodedData == "object") return decodedData.payload;

    return null;
  } catch (error) {
    throw new ServerError(error);
  }
};
