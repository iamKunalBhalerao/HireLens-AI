export interface SignUpAPIRequest {
  userName: string;
  email: string;
  password: string;
}

export interface SignInAPIRequest {
  email: string;
  password: string;
}
