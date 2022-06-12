import { Application } from "express";
import { getOrderRouter, getOrdersRouter, createOrderRouter, updateOrderRouter } from "../api";

export const orderRoutes = (path: string, app: Application) => {
  app.use(path, getOrderRouter);
  app.use(path, getOrdersRouter);
  app.use(path, createOrderRouter);
  app.use(path, updateOrderRouter);
};
