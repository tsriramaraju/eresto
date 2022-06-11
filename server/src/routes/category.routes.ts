import { Application } from "express";
import { getCategoriesRouter, createCategoryRouter, getCategoryRouter, removeCategoryRouter, updateCategoryRouter } from "../api";

export const categoryRoutes = (path: string, app: Application) => {
  app.use(path, getCategoriesRouter);
  app.use(path, createCategoryRouter);
  app.use(path, getCategoryRouter);
  app.use(path, removeCategoryRouter);
  app.use(path, updateCategoryRouter);
};
