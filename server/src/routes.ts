import { Application } from "express";
import { categoryRoutes } from "./routes/category.routes";
import { productsRoutes } from "./routes/products.routes";
import { userRoutes } from "./routes/users.routes";
import { waitlistRoutes } from "./routes/waitlist.routes";

export const initializeRoutes = (app: Application) => {
  categoryRoutes("/api/categories", app);
  productsRoutes("/api/products", app);
  waitlistRoutes("/api/waitlist", app);
  userRoutes("/api/users", app);
};
