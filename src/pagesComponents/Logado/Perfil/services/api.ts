import { UserProfile, SubscriptionDetails } from '../types';

export const ProfileService = {
    getUserProfile: async (userId: string): Promise<UserProfile> => {
        // Will be implemented with real API
        return {} as UserProfile;
    },

    updateUserProfile: async (userId: string, data: Partial<UserProfile>): Promise<UserProfile> => {
        // Will be implemented with real API
        return {} as UserProfile;
    },

    getSubscriptionDetails: async (userId: string): Promise<SubscriptionDetails> => {
        // Will be implemented with real API
        return {} as SubscriptionDetails;
    },

    updateSubscription: async (userId: string, planId: string): Promise<SubscriptionDetails> => {
        // Will be implemented with real API
        return {} as SubscriptionDetails;
    }
};