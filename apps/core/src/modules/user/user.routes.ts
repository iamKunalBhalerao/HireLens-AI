import { Router } from "express";
import { authenticate } from "../../common/middleware/auth.middleware";
import {
  changePasswordController,
  getUserController,
  updateUserController,
} from "./user.controller";
import { changePasswordSchema, updateUserSchema } from "./user.validations";
import { validate } from "../../common/middleware/validate.middleware";

const userRouter: Router = Router();

/**
 * @apiName get-user-profile
 * @description Retrieves current authenticated user profile
 * @path /api/v1/user/me
 * @method GET
 * @access private
 */
userRouter.route("/me").get(authenticate, getUserController);

/**
 * @apiName update-user-profile
 * @description Updates details of the user profile with validations
 * @path /api/v1/user/:userId/update
 * @method PUT
 * @access private
 */
userRouter
  .route("/:userId/update")
  .put(authenticate, validate(updateUserSchema), updateUserController);

/**
 * @apiName change-password
 * @description Changes the password of the authenticated user
 * @path /api/v1/user/:userId/change-password
 * @method PUT
 * @access private
 */
userRouter
  .route("/:userId/change-password")
  .put(authenticate, validate(changePasswordSchema), changePasswordController);

export default userRouter;
