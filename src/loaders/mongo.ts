import mongoose from "mongoose";
import { config } from "../config";

export async function mongoLoader() {
  try {
    // await mongoose.connect(config.MONGO_URI);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
