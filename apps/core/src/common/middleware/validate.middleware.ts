import { type Request, type Response, type NextFunction } from "express";
import { BadRequestError } from "../errors/errors";
import z, { ZodIssue } from "zod";

/**
 * Express middleware to validate request body against a Zod schema.
 * Throws a BadRequestError if validation fails.
 */
export const validate = (schema: z.ZodSchema) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.issues.map(
          (err: ZodIssue) => `${err.path.join(".")}: ${err.message}`,
        );
        next(new BadRequestError("Validation failed", errorMessages));
      } else {
        next(error);
      }
    }
  };
};
