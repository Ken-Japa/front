export interface UserProfile {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    avatar?: string;
    preferences: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

export interface SubscriptionDetails {
    id: string;
    planId: string;
    planName: string;
    status: 'active' | 'inactive' | 'pending';
    startDate: string;
    nextBillingDate: string;
    paymentMethod: {
        type: string;
        lastFour?: string;
    };
}

export type ProfileField = 'name' | 'email' | 'phone';