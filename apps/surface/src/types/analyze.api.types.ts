export interface AnalyzeAPIRequest {
  jobDescription: string;
  selfDescription: string;
  resume: File; // Assuming resume is a file upload
}

export interface TechnicalQuestion {
  id: number;
  reviewId: string;
  question: string;
  intention: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}

export interface BehavioralQuestion {
  id: number;
  reviewId: string;
  question: string;
  intention: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}

export interface SkillGap {
  id: number;
  reviewId: string;
  skill: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
  createdAt: string;
  updatedAt: string;
}

export interface PreparationPlan {
  id: number;
  reviewId: string;
  day: number;
  focus: string;
  tasks: string[];
  createdAt: string;
  updatedAt: string;
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
  title: string;
  matchScore: number;
  createdAt: string;
  updatedAt: string;
  technicalQuestions: TechnicalQuestion[];
  behavioralQuestions: BehavioralQuestion[];
  skillGaps: SkillGap[];
  preparationPlans: PreparationPlan[];
  user?: ReviewUser;
}