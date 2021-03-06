import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/customError";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err.serializeErrors());
  }
  console.error(err);
  res.status(400).json({ msg: "Something went wrong add middleware", error: err });
};
