import { Application } from "express";
import helmet from "helmet";
import xss from "xss-clean";
import hpp from "hpp";
import cors from "cors";

const security = (app: Application): void => {
  /**
   * Sanitizes user inputs
   */
  // app.use(mongoSanitize());

  //  FIXME : add sanitization later

  /**
   * Sets security headers
   */
  app.use(helmet());
  /**
   * Prevents  XSS attacks
   */
  app.use(xss());
  /**
   * Prevents http param pollution
   */
  app.use(hpp());
  /**
   * Enables cors
   */
  app.use(
    cors({
      // origin: "http://localhost:3000", // allow to server to accept request from different origin
      // met hods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      // credentials: true, // allow session cookie from browser to pass through
    })
  );
};

export { security };
