import { Router } from "express";
import {
  signUpController,
  signInController,
  signOutController,
  refreshTokenController,
  getCurrentUserController,
} from "./auth.controller";
import { validate, signUpSchema, signInSchema } from "./auth.validations";
import { authenticate } from "../../common/middleware/auth.middleware";

const authRouter: Router = Router();

/**
 * @apiName auth-signup
 * @description Route for user signup
 * @path /api/v1/auth/signup
 * @method POST
 * @access public
 */
authRouter.route("/signup").post(validate(signUpSchema), signUpController);

/**
 * @apiName auth-signin
 * @description Route for user signin
 * @path /api/v1/auth/signin
 * @method POST
 * @access public
 */
authRouter.route("/signin").post(validate(signInSchema), signInController);

/**
 * @apiName auth-signout
 * @description Route for user signout.
 * @path /api/v1/auth/signout
 * @method POST
 * @access private
 */
authRouter.route("/signout").post(authenticate, signOutController);

/**
 * @apiName auth-refresh-token
 * @description Route for refreshing access token.
 * @path /api/v1/auth/refresh-token
 * @method POST
 * @access public (reads refresh token from cookie/body)
 */
authRouter.route("/refresh-token").post(refreshTokenController);

/**
 * @apiName auth-me
 * @description Route for getting current user info
 * @path /api/v1/auth/me
 * @method GET
 * @access private
 */
authRouter.route("/me").get(authenticate, getCurrentUserController);

export default authRouter;
