import { prisma, type User, type Prisma } from "../../config/db.config";

/**
 * @name findUserById
 * @description Finds a user by their unique ID.
 */
export const findUserById = async (id: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id },
  });
};

/**
 * @name findUserByEmail
 * @description Finds a user by their email address.
 */
export const findUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { email },
  });
};

/**
 * @name updateUser
 * @description Updates a user's details in the database.
 */
export const updateUser = async (
  id: string,
  data: Prisma.UserUpdateInput,
): Promise<User> => {
  return prisma.user.update({
    where: { id },
    data,
  });
};
