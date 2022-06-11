import express, { json } from "express";
import "express-async-errors";
import { join } from "path";
import { loggers } from "./config/logger";
import { security } from "./config/security";
import { errorHandler } from "./middlewares/errorHandler";
import { initializeRoutes } from "./routes";

/**
 * initiate express app and body parser for json requests
 */
const app = express();
app.use(json({ limit: "50mb" }));

/**
 * Loads all the security middlewares
 */
security(app);

loggers(app);

// Set static folder
app.use(express.static(join(__dirname, "../public")));

/**
 * Set's up all the routes
 */
initializeRoutes(app);

/**
 * Custom error handling middleware
 */
app.use(errorHandler);

export { app };
