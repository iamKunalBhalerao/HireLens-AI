/**
 * User Module TypeScript Types
 */

export interface UpdateUserInput {
  userName?: string;
  email?: string;
  password?: string;
}

export interface UserResponse {
  id: string;
  userName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
