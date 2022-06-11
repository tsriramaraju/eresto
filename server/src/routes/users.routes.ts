import { Application } from "express";
import { getUserRouter, createUserRouter, addCartRouter, updateCartRouter, removeCartRouter, getUsersRouter } from "../api";

export const userRoutes = (path: string, app: Application) => {
  app.use(path, getUserRouter);

  app.use(path, createUserRouter);
  app.use(path, addCartRouter);
  app.use(path, updateCartRouter);
  app.use(path, removeCartRouter);
  app.use(path, getUsersRouter);
};
