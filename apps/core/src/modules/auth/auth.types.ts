/**
 * Auth Module TypeScript Types
 */

export interface SignUpInput {
  userName: string;
  email: string;
  password: string;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  userName: string;
  email: string;
}

export interface SignUpResponse {
  id: string;
  userName: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  createdAt: Date;
}

export interface SignInResponse {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}

export type RefreshTokenResponse = SignInResponse;

export interface CurrentUserResponse {
  id: string;
  userName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
