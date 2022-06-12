import { Application } from "express";
import { categoryRoutes } from "./routes/category.routes";
import { orderRoutes } from "./routes/order.routes";
import { productsRoutes } from "./routes/products.routes";
import { tablesRoutes } from "./routes/tables.routes";
import { userRoutes } from "./routes/users.routes";
import { waitlistRoutes } from "./routes/waitlist.routes";

export const initializeRoutes = (app: Application) => {
  categoryRoutes("/api/categories", app);
  productsRoutes("/api/products", app);
  tablesRoutes("/api/tables", app);
  waitlistRoutes("/api/waitlist", app);
  userRoutes("/api/users", app);
  orderRoutes("/api/orders", app);
};
