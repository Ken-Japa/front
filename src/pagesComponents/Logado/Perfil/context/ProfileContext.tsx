import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { ProfileService } from '../services/api';
import { UserProfile, SubscriptionDetails, ProfileField } from '../types';

interface ProfileContextType {
    profile: UserProfile | null;
    subscription: SubscriptionDetails | null;
    loading: boolean;
    error: Error | null;
    updateProfile: (field: ProfileField, value: string) => Promise<void>;
    updateSubscription: (planId: string) => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
    const { data: session } = useSession();
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [subscription, setSubscription] = useState<SubscriptionDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const userId = session?.user?.email;
            if (!userId) return;

            try {
                const [profileData, subscriptionData] = await Promise.all([
                    ProfileService.getUserProfile(userId),
                    ProfileService.getSubscriptionDetails(userId)
                ]);
                setProfile(profileData);
                setSubscription(subscriptionData);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [session]);

    const updateProfile = async (field: ProfileField, value: string) => {
        const userId = session?.user?.email;
        if (!userId || !profile) return;

        try {
            const updatedProfile = await ProfileService.updateUserProfile(
                userId,
                { ...profile, [field]: value }
            );
            setProfile(updatedProfile);
        } catch (err) {
            setError(err as Error);
            throw err;
        }
    };

    const updateSubscription = async (planId: string) => {
        const userId = session?.user?.email;
        if (!userId) return;

        try {
            const updatedSubscription = await ProfileService.updateSubscription(
                userId,
                planId
            );
            setSubscription(updatedSubscription);
        } catch (err) {
            setError(err as Error);
            throw err;
        }
    };

    return (
        <ProfileContext.Provider
            value={{
                profile,
                subscription,
                loading,
                error,
                updateProfile,
                updateSubscription
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error('useProfile must be used within a ProfileProvider');
    }
    return context;
};