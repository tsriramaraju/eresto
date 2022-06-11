import { connectDB } from "./config/mongoDB";
import { app } from "./app";
import secrets from "./config/secrets";

/**
 * clear previous logs
 */
console.clear();

connectDB()
  .then(() => {
    app.listen(secrets.port, () => {
      console.log(`server listening on ${secrets.port}`);
    });
  })
  .catch((err) => console.log(`Error in starting server${err}`));
