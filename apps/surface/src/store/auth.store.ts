import { AuthState } from "@/types/store.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isInitialized: false,

      setAuth: (user) =>
        set({ user, isAuthenticated: true, isInitialized: true }),
      signOut: () =>
        set({ user: null, isAuthenticated: false, isInitialized: false }),
    }),
    {
      name: "HireLens-AI-auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isInitialized = true;
        }
      },
    },
  ),
);
