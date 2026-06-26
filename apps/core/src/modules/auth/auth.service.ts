import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  createUser,
  findUserByEmail,
  findUserById,
  updateRefreshToken,
} from "./auth.dao";
import {
  ConflictError,
  NotFoundError,
  UnauthorizedError,
} from "../../common/errors/errors";
import {
  SignUpInput,
  SignInInput,
  SignUpResponse,
  SignInResponse,
  RefreshTokenResponse,
  CurrentUserResponse,
} from "./auth.types";

const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET || "dev_access_token_secret_12345";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "dev_refresh_token_secret_12345";

/**
 * Generates a short-lived access token containing user identity.
 */
export const generateAccessToken = (user: {
  id: string;
  email: string;
}): string => {
  return jwt.sign({ id: user.id, email: user.email }, ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

/**
 * Generates a long-lived refresh token.
 */
export const generateRefreshToken = (user: { id: string }): string => {
  return jwt.sign({ id: user.id }, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

/**
 * Verifies and decodes an access token.
 */
export const verifyAccessToken = (
  token: string,
): { id: string; email: string } => {
  return jwt.verify(token, ACCESS_TOKEN_SECRET) as {
    id: string;
    email: string;
  };
};

/**
 * Verifies and decodes a refresh token.
 */
export const verifyRefreshToken = (token: string): { id: string } => {
  return jwt.verify(token, REFRESH_TOKEN_SECRET) as { id: string };
};

/**
 * Registers a new user with hashed password.
 */
export const signUpService = async (
  data: SignUpInput,
): Promise<SignUpResponse> => {
  const existingUser = await findUserByEmail(data.email);
  if (existingUser) {
    throw new ConflictError("User with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 12);

  const newUser = await createUser({
    userName: data.userName,
    email: data.email,
    password: hashedPassword,
  });

  const accessToken = generateAccessToken({
    id: newUser.id,
    email: newUser.email,
  });
  const refreshToken = generateRefreshToken({ id: newUser.id });

  await updateRefreshToken(newUser.id, refreshToken);

  return {
    id: newUser.id,
    userName: newUser.userName,
    email: newUser.email,
    accessToken,
    refreshToken,
    createdAt: newUser.createdAt,
  };
};

/**
 * Authenticates user credentials and generates access/refresh tokens.
 */
export const signInService = async (
  data: SignInInput,
): Promise<SignInResponse> => {
  const user = await findUserByEmail(data.email);
  if (!user) {
    throw new UnauthorizedError("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(data.password, user.password);
  if (!isPasswordValid) {
    throw new UnauthorizedError("Invalid email or password");
  }

  const accessToken = generateAccessToken({ id: user.id, email: user.email });
  const refreshToken = generateRefreshToken({ id: user.id });

  await updateRefreshToken(user.id, refreshToken);

  return {
    user: {
      id: user.id,
      userName: user.userName,
      email: user.email,
    },
    accessToken,
    refreshToken,
  };
};

/**
 * Revokes refresh token in the database upon user signout.
 */
export const signOutService = async (userId: string): Promise<void> => {
  await updateRefreshToken(userId, null);
};

/**
 * Validates a refresh token and generates a new access/refresh token pair (token rotation).
 */
export const refreshTokenService = async (
  token: string,
): Promise<RefreshTokenResponse> => {
  let decoded: { id: string };
  try {
    decoded = verifyRefreshToken(token);
  } catch (error) {
    throw new UnauthorizedError("Expired or invalid refresh token");
  }

  const user = await findUserById(decoded.id);
  if (!user) {
    throw new UnauthorizedError("User not found");
  }

  if (user.refreshToken !== token) {
    throw new UnauthorizedError("Expired or invalid refresh token");
  }

  const accessToken = generateAccessToken({ id: user.id, email: user.email });
  const newRefreshToken = generateRefreshToken({ id: user.id });

  await updateRefreshToken(user.id, newRefreshToken);

  return {
    user: {
      id: user.id,
      userName: user.userName,
      email: user.email,
    },
    accessToken,
    refreshToken: newRefreshToken,
  };
};

/**
 * Retrieves the current user details.
 */
export const getCurrentUserService = async (
  userId: string,
): Promise<CurrentUserResponse> => {
  const user = await findUserById(userId);
  if (!user) {
    throw new NotFoundError("User not found");
  }

  return {
    id: user.id,
    userName: user.userName,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
