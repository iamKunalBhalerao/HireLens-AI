/**
 * Analysis Module TypeScript Types
 */

export interface TechnicalQuestion {
  id: number;
  reviewId: string;
  question: string;
  intention: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BehavioralQuestion {
  id: number;
  reviewId: string;
  question: string;
  intention: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SkillGap {
  id: number;
  reviewId: string;
  skill: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
  createdAt: Date;
  updatedAt: Date;
}

export interface PreparationPlan {
  id: number;
  reviewId: string;
  day: number;
  focus: string;
  tasks: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewUser {
  id: string;
  userName: string;
  email: string;
}

export interface ReviewResponse {
  id: string;
  userId: string;
  resume: string;
  selfDescription: string | null;
  jobDescription: string;
  matchScore: number;
  createdAt: Date;
  updatedAt: Date;
  technicalQuestions: TechnicalQuestion[];
  behavioralQuestions: BehavioralQuestion[];
  skillGaps: SkillGap[];
  preparationPlans: PreparationPlan[];
  user: ReviewUser;
}

export interface GenerateReviewInput {
  resume: string;
  selfDescription: string;
  jobDescription: string;
  userId: string;
}

export interface SaveReviewDAOInput {
  resume: string;
  selfDescription: string;
  jobDescription: string;
  reviewByAI: {
    matchScore: number;
    technicalQuestions: Array<{
      question: string;
      intention: string;
      answer: string;
    }>;
    behavioralQuestions: Array<{
      question: string;
      intention: string;
      answer: string;
    }>;
    skillGaps: Array<{
      skill: string;
      severity: "LOW" | "MEDIUM" | "HIGH";
    }>;
    preparationPlan: Array<{
      day: number;
      focus: string;
      tasks: string[];
    }>;
    title: string;
  };
  userId: string;
}
