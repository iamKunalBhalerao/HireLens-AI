import { NextFunction, Request, Response } from "express";
import { CookieOptions } from "express";
import {
  signUpService,
  signInService,
  signOutService,
  refreshTokenService,
  getCurrentUserService,
} from "./auth.service";
import { ApiResponse } from "../../common/utils/apiResponse";
import { UnauthorizedError } from "../../common/errors/errors";

// Extend Express Request type inline for authentication context
interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    userName: string;
  };
}

const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
};

const accessTokenOptions: CookieOptions = {
  ...cookieOptions,
  maxAge: 15 * 60 * 1000, // 15 minutes
};

const refreshTokenOptions: CookieOptions = {
  ...cookieOptions,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

/**
 * @name signUpController
 * @description Handles user registration.
 */
export const signUpController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { userName, email, password } = req.body;
    const result = await signUpService({ userName, email, password });

    res.cookie("accessToken", result.accessToken, accessTokenOptions);
    res.cookie("refreshToken", result.refreshToken, refreshTokenOptions);
    res
      .status(201)
      .json(new ApiResponse(201, result, "User registered successfully"));
  } catch (error) {
    next(error);
  }
};

/**
 * @name signInController
 * @description Handles user signin and issues HTTP-Only cookies.
 */
export const signInController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;
    const result = await signInService({ email, password });

    res.cookie("accessToken", result.accessToken, accessTokenOptions);
    res.cookie("refreshToken", result.refreshToken, refreshTokenOptions);
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { user: result.user, accessToken: result.accessToken },
          "User signed in successfully",
        ),
      );
  } catch (error) {
    next(error);
  }
};

/**
 * @name signOutController
 * @description Handles user signout by clearing cookies and invalidating refresh token.
 */
export const signOutController = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    if (userId) {
      await signOutService(userId);
    }

    res.clearCookie("accessToken", cookieOptions);
    res.clearCookie("refreshToken", cookieOptions);
    res.status(200).json(new ApiResponse(200, null, "Logged out successfully"));
  } catch (error) {
    next(error);
  }
};

/**
 * @name refreshTokenController
 * @description Rotates the refresh token and issues a new access/refresh token pair.
 */
export const refreshTokenController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const oldRefreshToken = req.cookies?.refreshToken || req.body?.refreshToken;
    if (!oldRefreshToken) {
      throw new UnauthorizedError("Refresh token is required");
    }

    const result = await refreshTokenService(oldRefreshToken);

    res.cookie("accessToken", result.accessToken, accessTokenOptions);
    res.cookie("refreshToken", result.refreshToken, refreshTokenOptions);
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { user: result.user, accessToken: result.accessToken },
          "Token refreshed successfully",
        ),
      );
  } catch (error) {
    next(error);
  }
};

/**
 * @name getCurrentUserController
 * @description Retrieves profile of the currently logged-in user.
 */
export const getCurrentUserController = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      throw new UnauthorizedError("Authentication required");
    }

    const result = await getCurrentUserService(userId);

    res
      .status(200)
      .json(
        new ApiResponse(200, result, "Current user retrieved successfully"),
      );
  } catch (error) {
    next(error);
  }
};
