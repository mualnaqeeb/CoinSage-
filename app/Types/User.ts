export interface UserSignupRequest {
    email: string;
    password: string;
}

export interface UserLoginRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
}
