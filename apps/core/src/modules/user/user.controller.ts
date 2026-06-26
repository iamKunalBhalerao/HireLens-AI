import { NextFunction, Request, Response } from "express";
import { getUserProfile, updateUserProfile } from "./user.service";
import { ApiResponse } from "../../common/utils/apiResponse";
import { ForbiddenError, UnauthorizedError } from "../../common/errors/errors";

// Extend Request type to include user details attached by the authenticate middleware
interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    userName: string;
  };
}

/**
 * @name getUserController
 * @description Handles retrieving the authenticated user's profile details.
 */
export const getUserController = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      throw new UnauthorizedError("Authentication required");
    }

    const userProfile = await getUserProfile(userId);

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          userProfile,
          "User profile retrieved successfully",
        ),
      );
  } catch (error) {
    next(error);
  }
};

/**
 * @name updateUserController
 * @description Handles updating user profile details.
 */
export const updateUserController = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const loggedInUserId = req.user?.id;
    if (!loggedInUserId) {
      throw new UnauthorizedError("Authentication required");
    }

    const { userId } = req.params;
    if (loggedInUserId !== userId) {
      throw new ForbiddenError(
        "You are not authorized to update this user's profile",
      );
    }

    const updatedUser = await updateUserProfile(userId, req.body);

    res
      .status(200)
      .json(
        new ApiResponse(200, updatedUser, "User profile updated successfully"),
      );
  } catch (error) {
    next(error);
  }
};
