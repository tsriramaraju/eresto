import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors";
import { JWTUserPayload } from "../interfaces";
import { currentUserService } from "../utils/currentUser";

declare global {
  namespace Express {
    interface Request {
      currentUser?: JWTUserPayload;
    }
  }
}
export const isUser = (req: Request, res: Response, next: NextFunction) => {
  const user = currentUserService(req);
  if (!user) throw new NotAuthorizedError();

  req.currentUser = user;

  next();
};
