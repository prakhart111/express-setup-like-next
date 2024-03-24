import express from "express";
import { config } from "./config";
import { loaders } from "./loaders";

// will keep everything modular, as functions are easier to test
async function startServer() {
  console.log("Starting server...");
  const app = express();
  const port = config.PORT;

  // load all required resources
  await loaders(app);

  app
    .listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    })
    .on("error", (err) => {
      console.error(err.message);
      process.exit(1);
    });
}

startServer();
