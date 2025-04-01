import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

export interface LineChartProps {
    data: Array<{ data: string; valor: number }>;
    loading?: boolean;
    xKey?: string;
    yKey?: string;
    labelFormat?: (value: number) => string;
    height?: number | string;
}

export const LineChart: React.FC<LineChartProps> = ({
    data,
    loading = false,
    xKey = 'data',
    yKey = 'valor',
    labelFormat = (value) => `${value}`,
    height = 400
}) => {
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!data || data.length === 0) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height }}>
                <Typography>Sem dados disponíveis</Typography>
            </Box>
        );
    }

    // Format data for Nivo Line chart
    const chartData = [
        {
            id: 'valores',
            data: data.map(item => ({
                x: new Date(item[xKey as keyof typeof item] as string),
                y: item[yKey as keyof typeof item] as number
            }))
        }
    ];

    return (
        <Box sx={{ height }}>
            <ResponsiveLine
                data={chartData}
                margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                xScale={{ type: 'time', format: 'native' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                axisBottom={{
                    format: '%d/%m',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Data',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Valor',
                    legendOffset: -40,
                    legendPosition: 'middle',
                    format: (value) => labelFormat(value as number)
                }}
                colors={{ scheme: 'category10' }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                tooltip={({ point }) => (
                    <Box sx={{ p: 1, bgcolor: 'background.paper', boxShadow: 1, borderRadius: 1 }}>
                        <Typography variant="body2">
                            {new Date(point.data.x as Date).toLocaleDateString('pt-BR')}
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                            {labelFormat(point.data.y as number)}
                        </Typography>
                    </Box>
                )}
            />
        </Box>
    );
};