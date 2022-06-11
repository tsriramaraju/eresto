import { Application } from "express";
import { categoryRoutes } from "./routes/category.routes";

export const initializeRoutes = (app: Application) => {
  categoryRoutes("/api/categories", app);
};
