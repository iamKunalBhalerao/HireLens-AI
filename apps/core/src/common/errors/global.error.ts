import type { Request, Response, NextFunction } from "express";
import { CoreError } from "./errors";

/**
 * Global error handler middleware for Express.
 * Catches all errors thrown in routes, controllers, or other middlewares.
 */
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (res.headersSent) {
    return next(err);
  }

  const isDev = process.env.NODE_ENV === "development";

  if (err instanceof CoreError) {
    res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
      errors: err.errors,
      data: err.data,
      ...(isDev && { stack: err.stack }),
    });
    return;
  }

  const statusCode = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
    errors: [],
    data: null,
    ...(isDev && { stack: err.stack }),
  });
};
