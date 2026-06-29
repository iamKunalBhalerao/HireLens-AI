interface User {
  id: string;
  email: string;
  userName: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isInitialized: boolean;

  setAuth: (user: User) => void;
  signOut: () => void;
}
