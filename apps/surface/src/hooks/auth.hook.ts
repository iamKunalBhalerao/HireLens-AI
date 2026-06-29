"use client";

import {
  getCurrentUser,
  SignIn,
  SignOut,
  SignUp,
  refreshToken as apiRefreshToken,
} from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const { user, setAuth, signOut } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async ({
    email,
    password,
    userName,
  }: {
    email: string;
    password: string;
    userName: string;
  }) => {
    try {
      setLoading(true);
      const data = await SignUp({ email, password, userName });
      setAuth(data.data.user);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  const handleSignIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setLoading(true);
      const data = await SignIn({ email, password });
      console.log("user:", data.data.user);
      setAuth(data.data.user);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      const data = await SignOut();
      signOut();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  const refetchCurrentUser = async () => {
    try {
      setLoading(true);
      const data = await getCurrentUser();
      setAuth(data.data);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  const refreshToken = async () => {
    try {
      setLoading(true);
      const data = await apiRefreshToken();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    const getAndSetUser = async () => {
      try {
        const data = await getCurrentUser();
        setAuth(data.data.user);
      } catch (error) {
        signOut();
      } finally {
        setLoading(false);
      }
    };
    getAndSetUser();
  }, []);

  return {
    user,
    loading,
    handleSignUp,
    handleSignIn,
    handleSignOut,
    refetchCurrentUser,
    refreshToken,
  };
};