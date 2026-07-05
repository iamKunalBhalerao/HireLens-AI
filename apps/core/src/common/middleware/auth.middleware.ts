import { type Request, type Response, type NextFunction } from "express";
import { verifyAccessToken } from "../../modules/auth/auth.service";
import { findUserById } from "../../modules/auth/auth.dao";
import { UnauthorizedError } from "../errors/errors";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        userName: string;
      };
    }
  }
}

/**
 * Middleware to authenticate requests using JWT access tokens.
 * Supports Authorization: Bearer <token> header and accessToken cookies.
 */
export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    let token = req.cookies.accessToken;

    if (!token) {
      throw new UnauthorizedError(
        "Authentication token is missing. Please sign in.",
      );
    }

    let decoded: { id: string; email: string };
    try {
      decoded = verifyAccessToken(token);
    } catch (err) {
      throw new UnauthorizedError(
        "Session expired or invalid token. Please sign in again.",
      );
    }

    const user = await findUserById(decoded.id);
    if (!user) {
      throw new UnauthorizedError("User does not exist.");
    }

    req.user = {
      id: user.id,
      email: user.email,
      userName: user.userName,
    };

    next();
  } catch (error) {
    next(error);
  }
};
