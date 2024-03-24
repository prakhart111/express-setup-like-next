// keep the configuration in a single place
import dotenv from "dotenv";
import { ConfigType } from "./config";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// load the environment variables
const isEnvFound = dotenv.config();
if (isEnvFound.error) {
  throw new Error("Couldn't find .env file");
}

export const config: ConfigType = {
  PORT: parseInt(process.env.PORT as string, 10) || 3000,
  logs: {
    morgan: process.env.MORGAN || "dev",
  },
  MONGO_URI: process.env.MONGO_URI as string,
  API_BASE_URL: process.env.API_BASE_URL as string,
};
