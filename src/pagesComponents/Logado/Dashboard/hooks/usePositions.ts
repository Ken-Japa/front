import { useState, useEffect } from 'react';
import { Position } from '../types';
import { DashboardService } from '../services/api';

export const usePositions = (type: 'real' | 'mock') => {
    const [positions, setPositions] = useState<Position[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPositions = async () => {
            try {
                const data = await DashboardService.getPositions(type);
                setPositions(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchPositions();
    }, [type]);

    const addPosition = async (name: string) => {
        try {
            const newPosition = await DashboardService.addPosition(type, name);
            setPositions([...positions, newPosition]);
        } catch (err) {
            setError(err as Error);
            throw err;
        }
    };

    return { positions, loading, error, addPosition };
};