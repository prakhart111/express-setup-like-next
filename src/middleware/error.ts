import type { Request, Response, NextFunction } from "express";

export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const err = new Error(`Not Found - ${req.originalUrl}`);
  err["status"] = 404;
  next(err);
}

export function globalErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err.message);
  res.status(err["status"] || 500);
  res.json({
    error: {
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
    },
  });
}
