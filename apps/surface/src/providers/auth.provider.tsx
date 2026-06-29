"use client";

import { useAuthStore } from "@/store/auth.store";
import { AuthUser } from "@/types/auth.types";
import { ReactNode, useEffect } from "react";

type Props = {
  user: AuthUser | null;
  children: ReactNode;
  serverReachable: boolean;
};

export default function AuthProvider({
  user,
  children,
  serverReachable,
}: Props) {
  const setAuth = useAuthStore((state) => state.setAuth);
  const signOut = useAuthStore((state) => state.signOut);

  useEffect(() => {
    if (user) {
      setAuth(user);
    } else {
      signOut();
    }
  }, [user, serverReachable]);

  return <>{children}</>;
}
