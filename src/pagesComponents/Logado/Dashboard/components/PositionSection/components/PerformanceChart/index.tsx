"use client";

import { Box, Typography } from '@mui/material';
import { ChartContainer, ChartHeader } from './styled';

// Mock data - will be replaced with API data
const mockChartData = {
    real: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        data: [10000, 11200, 10800, 12000, 12500],
        performance: 25
    },
    mock: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        data: [5000, 5300, 5100, 5600, 5800],
        performance: 16
    }
};

interface PerformanceChartProps {
    type: 'real' | 'mock';
}

export const PerformanceChart = ({ type }: PerformanceChartProps) => {
    const data = mockChartData[type];

    return (
        <Box>
            <ChartHeader>
                <Typography variant="h6">Evolução da Rentabilidade</Typography>
                <Typography 
                    variant="h6" 
                    color={data.performance >= 0 ? 'success.main' : 'error.main'}
                >
                    {data.performance >= 0 ? '+' : ''}{data.performance}%
                </Typography>
            </ChartHeader>
            <ChartContainer>
                {/* Chart placeholder - will be implemented with a chart library */}
                <Box sx={{
                    width: '100%',
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'text.secondary',
                    fontStyle: 'italic'
                }}>
                    Gráfico será implementado
                </Box>
            </ChartContainer>
        </Box>
    );
};