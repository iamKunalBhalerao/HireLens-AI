import { Router } from "express";
import { authenticate } from "../../common/middleware/auth.middleware";
import {
  deleteReviewController,
  generateReviewController,
  getAllReviewsController,
  getReviewByIdController,
} from "./analysis.controller";
import { upload } from "../../common/utils/file.utils";
import { generateReviewSchema } from "./analysis.validations";
import { validate } from "../../common/middleware/validate.middleware";

const analysisRouter: Router = Router();

/**
 * @apiName generate-review
 * @description Route for generating review
 * @path /api/v1/review
 * @method POST
 * @access private
 */
analysisRouter
  .route("/review")
  .post(
    authenticate,
    upload.single("resume"),
    validate(generateReviewSchema),
    generateReviewController,
  );

/**
 * @apiName all-reviews
 * @description Route for getting all reviews
 * @path /api/v1/all/review
 * @method GET
 * @access private
 */
analysisRouter.route("/all/review").get(authenticate, getAllReviewsController);

/**
 * @apiName review-by-id
 * @description Route for getting review by id
 * @path /api/v1/:reviewId/review
 * @method GET
 * @access private
 */
analysisRouter
  .route("/:reviewId/review")
  .get(authenticate, getReviewByIdController);

/**
 * @apiName delete-review
 * @description Route for deleting review
 * @path /api/v1/:reviewId/review
 * @method DELETE
 * @access private
 */
analysisRouter
  .route("/:reviewId/review")
  .delete(authenticate, deleteReviewController);

export default analysisRouter;
