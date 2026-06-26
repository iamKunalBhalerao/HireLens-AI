import { NextFunction, Request, Response } from "express";
import { BadRequestError, UnauthorizedError } from "../../common/errors/errors";
import { PDFParse } from "pdf-parse";
import {
  deleteReviewService,
  generateReviewService,
  getAllReviewsService,
  getReviewByIdService,
} from "./analysis.service";
import { ApiResponse } from "../../common/utils/apiResponse";

// Extend Request type to include user details attached by the authenticate middleware
interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    userName: string;
  };
}

/**
 * @name generateReviewController
 * @description Controller for generating reviews for candidates
 */
export const generateReviewController = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { selfDescription, jobDescription } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError("Authentication required");
    }

    if (!req.file) {
      throw new BadRequestError("Resume file is required");
    }

    const parser = new PDFParse({ data: req.file.buffer });
    const resume = await parser.getText();
    await parser.destroy();

    const data = await generateReviewService({
      resume: resume.text,
      selfDescription,
      jobDescription,
      userId,
    });

    return res
      .status(201)
      .json(new ApiResponse(201, data, "Review generated successfully"));
  } catch (error) {
    next(error);
  }
};

/**
 * @name getAllReviewsController
 * @description Controller for getting all reviews for candidates
 */
export const getAllReviewsController = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      throw new UnauthorizedError("Authentication required");
    }
    const data = await getAllReviewsService({ userId });
    return res
      .status(200)
      .json(new ApiResponse(200, data, "Reviews fetched successfully"));
  } catch (error) {
    next(error);
  }
};

/**
 * @name getReviewByIdController
 * @description Controller for getting review by id
 */
export const getReviewByIdController = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { reviewId } = req.params as { reviewId: string };
    if (!reviewId) {
      throw new BadRequestError("Review ID is required");
    }

    const userId = req.user?.id;
    if (!userId) {
      throw new UnauthorizedError("Authentication required");
    }

    const data = await getReviewByIdService({ reviewId, userId });

    return res
      .status(200)
      .json(new ApiResponse(200, data, "Review fetched successfully"));
  } catch (error) {
    next(error);
  }
};

/**
 * @name deleteReviewController
 * @description Controller for deleting review
 */
export const deleteReviewController = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { reviewId } = req.params as { reviewId: string };
    if (!reviewId) {
      throw new BadRequestError("Review ID is required");
    }

    const userId = req.user?.id;
    if (!userId) {
      throw new UnauthorizedError("Authentication required");
    }

    await deleteReviewService({ reviewId, userId });

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Review deleted successfully"));
  } catch (error) {
    next(error);
  }
};
