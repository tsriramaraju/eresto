import { connect } from "mongoose";
import secrets from "./secrets";

/**
 * Helps in connecting to mongodb Atlas
 */

export const connectDB = async () => {
  const uri = secrets.mongoURL;
  try {
    await connect(uri, {
      autoIndex: true,
      socketTimeoutMS: 30000,
      keepAlive: true,
    });
    console.log(`Database connected...`);
  } catch (err) {
    console.log(`error in connection Database\n${err}`);
    process.exit(1);
  }
};
