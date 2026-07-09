import bcrypt from "bcrypt";
import { findUserById, findUserByEmail, updateUser } from "./user.dao";
import { UpdateUserInput, UserResponse } from "./user.types";
import { ConflictError, NotFoundError, UnauthorizedError } from "../../common/errors/errors";

/**
 * @name formatUserResponse
 * @description Formats a raw user object from database to UserResponse format.
 */
const formatUserResponse = (user: any): UserResponse => {
  return {
    id: user.id,
    userName: user.userName,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

/**
 * @name getUserProfile
 * @description Retrieves the profile of a user by id.
 */
export const getUserProfile = async (userId: string): Promise<UserResponse> => {
  const user = await findUserById(userId);
  if (!user) {
    throw new NotFoundError("User not found");
  }
  return formatUserResponse(user);
};

/**
 * @name updateUserProfile
 * @description Updates a user's profile with validation and security checks.
 */
export const updateUserProfile = async (
  userId: string,
  data: UpdateUserInput,
): Promise<UserResponse> => {
  // Verify user exists
  const existingUser = await findUserById(userId);
  if (!existingUser) {
    throw new NotFoundError("User not found");
  }

  const updateData: any = {};

  if (data.userName) {
    updateData.userName = data.userName;
  }

  if (data.email && data.email !== existingUser.email) {
    const emailConflict = await findUserByEmail(data.email);
    if (emailConflict) {
      throw new ConflictError("Email is already in use by another user");
    }
    updateData.email = data.email;
  }

  if (data.password) {
    updateData.password = await bcrypt.hash(data.password, 12);
  }
  if (Object.keys(updateData).length === 0) {
    return formatUserResponse(existingUser);
  }

  const updatedUser = await updateUser(userId, updateData);
  return formatUserResponse(updatedUser);
};

/**
 * @name changeUserPassword
 * @description Changes the password of a user after validating the old password.
 */
export const changeUserPassword = async (
  userId: string,
  oldPassword: string,
  newPassword: string,
): Promise<void> => {
  const user = await findUserById(userId);
  if (!user) {
    throw new NotFoundError("User not found");
  }

  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    throw new UnauthorizedError("Old password is incorrect");
  }

  const hashedNewPassword = await bcrypt.hash(newPassword, 12);
  await updateUser(userId, { password: hashedNewPassword });
};
