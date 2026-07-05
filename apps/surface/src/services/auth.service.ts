import { SignInAPIRequest, SignUpAPIRequest } from "@/types/auth.api.types";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "/api/v1",
  withCredentials: true,
});

export const SignUp = async ({
  userName,
  email,
  password,
}: SignUpAPIRequest) => {
  try {
    const res = await api.post("/auth/signup", { userName, email, password });
    return res.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return { success: false, message: "Something went wrong" };
  }
};

export const SignIn = async ({ email, password }: SignInAPIRequest) => {
  try {
    const res = await api.post("/auth/signin", { email, password });
    return res.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return { success: false, message: "Something went wrong" };
  }
};

export const SignOut = async () => {
  try {
    const res = await api.post("/auth/signout");
    return res.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return { success: false, message: "Something went wrong" };
  }
};

export async function IsAuthenticated(token?: string) {
  const headers = token ? { Cookie: `accessToken=${token}` } : undefined;
  const response = await api.get("/auth/me", { headers });
  return response.data.data;
}

export const getCurrentUser = async () => {
  try {
    const res = await api.get("/auth/me");
    return res.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return { success: false, message: "Something went wrong" };
  }
};

export const refreshToken = async () => {
  try {
    const res = await api.post("/auth/refresh-token");
    console.log(res.data);
    return res.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return { success: false, message: "Something went wrong" };
  }
};
