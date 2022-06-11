import { Application } from "express";
import { getUserRouter, createUserRouter, addCartRouter, updateCartRouter, removeCartRouter, getUsersRouter } from "../api";
import { searchUserRouter } from "../api/users/searchUser";
import { sendOTPRouter } from "../api/users/sendOTP";
import { userSilentLoginRouter } from "../api/users/silentLogin";

export const userRoutes = (path: string, app: Application) => {
  app.use(path, getUserRouter);

  app.use(path, createUserRouter);
  app.use(path, addCartRouter);
  app.use(path, updateCartRouter);
  app.use(path, removeCartRouter);
  app.use(path, getUsersRouter);
  app.use(path, searchUserRouter);
  app.use(path, sendOTPRouter);
  app.use(path, userSilentLoginRouter);
};
