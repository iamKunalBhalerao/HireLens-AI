/**
 * Custom Error Classes
 *
 * @fileoverview Defines a hierarchy of custom error classes that extend the base Error class.
 * Each class represents a specific type of HTTP error and includes properties for status code,
 * data, success status, and error details. The hierarchy allows for consistent error handling
 * and response formatting throughout the application.
 */

export class CoreError extends Error {
  statusCode: number;
  data: null;
  success: boolean;
  errors: any[];
  constructor(
    statusCode: number,
    message = "Something went wrong",
    errors: any[] = [],
    stack = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class BadRequestError extends CoreError {
  constructor(message = "Bad Request", errors: any[] = []) {
    super(400, message, errors);
  }
}

export class UnauthorizedError extends CoreError {
  constructor(message = "Unauthorized") {
    super(401, message);
  }
}

export class ForbiddenError extends CoreError {
  constructor(message = "Forbidden") {
    super(403, message);
  }
}

export class NotFoundError extends CoreError {
  constructor(message = "Not Found") {
    super(404, message);
  }
}

export class ConflictError extends CoreError {
  constructor(message = "Conflict") {
    super(409, message);
  }
}

export class InternalServerError extends CoreError {
  constructor(message = "Internal Server Error") {
    super(500, message);
  }
}

export const ApiError = CoreError;
