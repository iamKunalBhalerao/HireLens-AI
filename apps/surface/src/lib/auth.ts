import { cache } from "react";
import { cookies } from "next/headers";
import { AuthUser } from "@/types/auth.types";
import { redirect } from "next/navigation";
import { IsAuthenticated } from "@/services/auth.service";

export const getServerUser = cache(async (): Promise<AuthUser | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) return null;

  try {
    const result = await IsAuthenticated(token);
    return result as AuthUser;
  } catch (error) {
    return null;
  }
});

export async function logoutAction() {
  const cookieStore = await cookies();

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  redirect("/auth/signin");
}
