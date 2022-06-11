import { Application } from "express";
import { getWaitListRouter, addWaitlistRouter, createWaitListRouter, removeWaitlistRouter } from "../api";

export const waitlistRoutes = (path: string, app: Application) => {
  app.use(path, getWaitListRouter);
  app.use(path, addWaitlistRouter);
  app.use(path, createWaitListRouter);
  app.use(path, removeWaitlistRouter);
};
