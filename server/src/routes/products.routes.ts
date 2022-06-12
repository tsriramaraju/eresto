import { Application } from "express";
import { getProductRouter, createProductRouter, removeProductRouter, updateProductRouter, getProductsRouter } from "../api";

export const productsRoutes = (path: string, app: Application) => {
  app.use(path, getProductRouter);
  app.use(path, createProductRouter);
  app.use(path, removeProductRouter);
  app.use(path, updateProductRouter);
  app.use(path, getProductsRouter);
};
