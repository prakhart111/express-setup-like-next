import express from "express";
import cors from "cors"; // Cross-Origin Resource Sharing
import helmet from "helmet"; // helps to secure Express app out of the box
import type { Express } from "express";
import morgan from "morgan";
import { config } from "../config";
import indexRouter from "../api";
import { notFoundHandler, globalErrorHandler } from "../middleware/error";

export async function expressLoader(app: Express) {
  // Health check endpoints
  app.get("/status", (req, res) => res.sendStatus(200).end());
  app.head("/status", (req, res) => res.sendStatus(200).end());

  // get real IP address in production when behind a reverse proxy like Nginx
  app.enable("trust proxy");

  // Middlewares
  app.use(
    helmet(
      { contentSecurityPolicy: false } // disable CSP for now
    )
  );
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan(config.logs.morgan));

  // Routes
  app.use("/api", indexRouter());

  // error handling
  app.use(notFoundHandler);
  app.use(globalErrorHandler);
}
