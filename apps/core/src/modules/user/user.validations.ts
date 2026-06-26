import { z } from "zod";

export const updateUserSchema = z.object({
  userName: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .optional(),
  email: z.string().email("Invalid email address").optional(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .optional(),
});
