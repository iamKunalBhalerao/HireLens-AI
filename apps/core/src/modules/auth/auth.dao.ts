import { prisma, type User, type Prisma } from "../../config/db.config";

/**
 * Creates a new user in the database.
 */
export const createUser = async (
  data: Prisma.UserCreateInput,
): Promise<User> => {
  return prisma.user.create({
    data,
  });
};

/**
 * Finds a user by their email address.
 */
export const findUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { email },
  });
};

/**
 * Finds a user by their unique ID.
 */
export const findUserById = async (id: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id },
  });
};

/**
 * Updates the stored refresh token for a user.
 * Setting it to null invalidates the session (logout).
 */
export const updateRefreshToken = async (
  id: string,
  token: string | null,
): Promise<User> => {
  return prisma.user.update({
    where: { id },
    data: { refreshToken: token },
  });
};
