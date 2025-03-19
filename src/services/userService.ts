import { User, UserSettings } from '@/types/user';
import { ApiResponse, UserRegistrationData, UserUpdateData } from '@/types/api';

export class UserService {
    private static baseUrl = process.env.NEXT_PUBLIC_API_URL;

    static async register(data: UserRegistrationData): Promise<ApiResponse<User>> {
        // Implementation will be added when API is ready
        throw new Error('Not implemented');
    }

    static async updateProfile(userId: string, data: UserUpdateData): Promise<ApiResponse<User>> {
        // Implementation will be added when API is ready
        throw new Error('Not implemented');
    }

    static async updateSettings(userId: string, settings: Partial<UserSettings>): Promise<ApiResponse<UserSettings>> {
        // Implementation will be added when API is ready
        throw new Error('Not implemented');
    }

    static async getUserProfile(userId: string): Promise<ApiResponse<User>> {
        // Implementation will be added when API is ready
        throw new Error('Not implemented');
    }
}