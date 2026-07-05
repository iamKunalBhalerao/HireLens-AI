import { AnalyzeAPIRequest } from "@/types/analyze.api.types";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "/api/v1",
  withCredentials: true,
});

export const Analyze = async ({
  jobDescription,
  selfDescription,
  resume,
}: AnalyzeAPIRequest) => {
  try {
    const formData = new FormData();
    formData.append("jobDescription", jobDescription);
    formData.append("selfDescription", selfDescription);
    formData.append("resume", resume);

    const res = await api.post("/analysis/review", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return { success: false, message: "Something went wrong" };
  }
};

export const getReviewById = async (reviewId: string) => {
  try {
    const res = await api.get(`/analysis/${reviewId}/review`);
    return res.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return { success: false, message: "Something went wrong" };
  }
};

export const getAllReviews = async () => {
  try {
    const res = await api.get("/analysis/all/review");
    return res.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return { success: false, message: "Something went wrong" };
  }
};

export const deleteReviewById = async (reviewId: string) => {
  try {
    const res = await api.delete(`/analysis/${reviewId}/review`);
    return res.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return { success: false, message: "Something went wrong" };
  }
};
