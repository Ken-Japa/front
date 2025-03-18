import { Alert } from '../types';
import { mockAlerts } from '../mocks/alerts';

export const alertsService = {
    getAlerts: async (): Promise<Alert[]> => {
        // TODO: Replace with actual API call
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockAlerts), 1000);
        });
    },

    createAlert: async (alert: Omit<Alert, 'id'>): Promise<Alert> => {
        // TODO: Replace with actual API call
        return new Promise((resolve) => {
            const newAlert = {
                ...alert,
                id: Math.random(),
            };
            setTimeout(() => resolve(newAlert), 1000);
        });
    },

    updateAlert: async (alert: Alert): Promise<Alert> => {
        // TODO: Replace with actual API call
        return new Promise((resolve) => {
            setTimeout(() => resolve(alert), 1000);
        });
    },

    deleteAlert: async (id: number): Promise<void> => {
        // TODO: Replace with actual API call
        return new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    },

    toggleAlert: async (id: number, active: boolean): Promise<void> => {
        // TODO: Replace with actual API call
        return new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    }
};