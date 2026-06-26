import { z } from "zod";

export const generateReviewSchema = z.object({
  selfDescription: z.string().min(1, "Self description is required"),
  jobDescription: z.string().min(1, "Job description is required"),
});
