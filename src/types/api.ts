import { UserSettings, User } from './user';

export type ApiResponse<T> = {
    success: boolean;
    data?: T;
    error?: {
        code: string;
        message: string;
    };
};

export type UserRegistrationData = {
    name: string;
    email: string;
    phone?: string;
    cpf: string;
    password: string;
};

export type UserLoginData = {
    email: string;
    password: string;
};

// Define UserPreferences type based on the User interface
type UserPreferences = User['preferences'];

export type UserUpdateData = Partial<Omit<UserRegistrationData, 'password'>> & {
    settings?: Partial<UserSettings>;
    preferences?: Partial<UserPreferences>;
};