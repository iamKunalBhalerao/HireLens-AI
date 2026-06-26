import { GoogleGenAI } from "@google/genai";
import { generatePrompt } from "./prompts/prompt";
import zodToJsonSchema from "zod-to-json-schema";
import z from "zod/v3";

if (!process.env.GOOGLE_GEMINI_API_KEY)
  throw new Error("Google API key is not defined");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY,
});

const reviewReportSchema = z.object({
  matchScore: z
    .number()
    .describe(
      "Match score between 0 and 100, indicates how well the candidate is matching the job description",
    ),
  technicalQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("Technical Questions can be asked in Interview."),
        intention: z
          .string()
          .describe(
            "The intention of the interviewer behind asking this technical question",
          ),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approach to take etc.",
          ),
      }),
    )
    .describe(
      "Technical questions can be asked in interview along with their intention and how to answer them",
    ),
  behavioralQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("Behavioural Questions can be asked in Interview."),
        intention: z
          .string()
          .describe(
            "The intention of the interviewer behind asking this Behavioural question",
          ),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approach to take etc.",
          ),
      }),
    )
    .describe(
      "Behavioural questions can be asked in interview along with their intention and how to answer them",
    ),
  skillGaps: z
    .array(
      z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z
          .enum(["LOW", "MEDIUM", "HIGH"])
          .describe(
            "The severity of the skill gap, can be low, medium or high",
          ),
      }),
    )
    .describe(
      "List of skill gap in the candidate's profile, along with their severity",
    ),
  preparationPlan: z
    .array(
      z.object({
        day: z
          .number()
          .describe("The day number in preparation plan, starting from 1"),
        focus: z
          .string()
          .describe(
            "Focus area for the day, i.e. which topics to study, data structures, system design, mock interviews etc.",
          ),
        tasks: z.array(z.string()).describe("Tasks to be done on the day"),
      }),
    )
    .describe("Preparation plan for the interview, starting from day 1"),
  title: z
    .string()
    .describe(
      "Title of the Job Profile or Designation for which the interview is being conducted",
    ),
});

export const generateReviewByAI = async ({
  resume,
  selfDescription,
  jobDescription,
}: {
  resume: string;
  selfDescription: string;
  jobDescription: string;
}) => {
  const prompt = generatePrompt({
    resume,
    selfDescription,
    jobDescription,
  });

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: zodToJsonSchema(reviewReportSchema),
    },
  });

  const parsedResponse = JSON.parse(response.text!);
  return parsedResponse;
};
