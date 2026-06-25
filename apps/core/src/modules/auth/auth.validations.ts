import { z, type ZodIssue } from "zod";
import { type Request, type Response, type NextFunction } from "express";
import { BadRequestError } from "../../common/errors/errors";

export const signUpSchema = z.object({
  userName: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

/**
 * Express middleware to validate request body against a Zod schema.
 * Throws a BadRequestError if validation fails.
 */
export const validate = (schema: z.ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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
