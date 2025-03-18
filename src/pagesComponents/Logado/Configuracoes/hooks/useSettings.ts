import { useState, useEffect } from 'react';

export interface UserSettings {
    notifications: {
        email: boolean;
        push: boolean;
        priceAlerts: boolean;
    };
    defaultPercentages: {
        buy: number;
        sell: number;
    };
}

export const useSettings = () => {
    const [settings, setSettings] = useState<UserSettings>({
        notifications: {
            email: true,
            push: true,
            priceAlerts: true,
        },
        defaultPercentages: {
            buy: 5,
            sell: 5
        }
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUserSettings = async () => {
        try {
            setIsLoading(true);
            // TODO: Replace with actual API call
            // const response = await api.get('/user/settings');
            // setSettings(response.data);
        } catch (err) {
            setError('Failed to load settings');
        } finally {
            setIsLoading(false);
        }
    };

    const updateSettings = async (newSettings: Partial<UserSettings>) => {
        try {
            setIsLoading(true);
            // TODO: Replace with actual API call
            // await api.put('/user/settings', newSettings);
            setSettings(prev => ({ ...prev, ...newSettings }));
            return true;
        } catch (err) {
            setError('Failed to update settings');
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    const updateNotifications = async (type: keyof UserSettings['notifications'], value: boolean) => {
        const success = await updateSettings({
            notifications: { ...settings.notifications, [type]: value }
        });
        return success;
    };

    const updatePercentages = async (type: keyof UserSettings['defaultPercentages'], value: number) => {
        const success = await updateSettings({
            defaultPercentages: { ...settings.defaultPercentages, [type]: value }
        });
        return success;
    };

    useEffect(() => {
        fetchUserSettings();
    }, []);

    return {
        settings,
        isLoading,
        error,
        updateNotifications,
        updatePercentages,
    };
};