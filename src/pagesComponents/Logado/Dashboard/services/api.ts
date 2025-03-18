import { Position, Activity, ChartData, SummaryData } from '../types';

export const DashboardService = {
    getPositions: async (type: 'real' | 'mock'): Promise<Position[]> => {
        // API implementation will go here
        return [];
    },

    getActivities: async (type: 'real' | 'mock'): Promise<Activity[]> => {
        // API implementation will go here
        return [];
    },

    getChartData: async (type: 'real' | 'mock'): Promise<ChartData> => {
        // API implementation will go here
        return {} as ChartData;
    },

    getSummaryData: async (type: 'real' | 'mock'): Promise<SummaryData> => {
        // API implementation will go here
        return {} as SummaryData;
    },

    addPosition: async (type: 'real' | 'mock', name: string): Promise<Position> => {
        // API implementation will go here
        return {} as Position;
    },

    addAsset: async (positionId: number, assetData: any): Promise<void> => {
        // API implementation will go here
    },

    renamePosition: async (positionId: number, newName: string): Promise<void> => {
        // API implementation will go here
    }
};