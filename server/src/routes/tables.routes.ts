import { Application } from "express";
import { getTableRouter, createTableRouter, removeTableRouter, updateTableRouter } from "../api";

export const tablesRoutes = (path: string, app: Application) => {
  app.use(path, getTableRouter);
  app.use(path, createTableRouter);
  app.use(path, removeTableRouter);
  app.use(path, updateTableRouter);
};
