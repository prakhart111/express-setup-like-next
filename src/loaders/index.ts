import { expressLoader } from "./express";
import { mongoLoader } from "./mongo";
import type { Express } from "express";

export async function loaders(app: Express) {
  // anything that needs to be initialized/loaded will go here
  await mongoLoader();
  console.log("MongoDB loaded");

  await expressLoader(app);
  console.log("Express loaded");
}
