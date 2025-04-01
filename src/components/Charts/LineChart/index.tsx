import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

export interface LineChartProps {
    data: Array<{ data: string; valor: number;[key: string]: any }>;
    loading?: boolean;
    xKey?: string;
    yKey?: string;
    labelFormat?: (value: number) => string;
    height?: number | string;
    xAxisProps?: {
        angle?: number;
        textAnchor?: string;
        height?: number;
        fontSize?: number;
        tickColor?: string;
        tickTextColor?: string;
        legendColor?: string;
        [key: string]: any;
    };
    yAxisProps?: {
        width?: number;
        fontSize?: number;
        tickFormatter?: (value: number) => string;
        tickColor?: string;
        tickTextColor?: string;
        legendColor?: string;
        [key: string]: any;
    };
    tooltipProps?: {
        formatter?: (value: number) => [string] | [string, string];
        labelFormatter?: (label: string) => string;
        [key: string]: any;
    };
    chartProps?: {
        enableGridX?: boolean;
        enableGridY?: boolean;
        gridXColor?: string;
        gridYColor?: string;
        lineWidth?: number;
        enableArea?: boolean;
        areaOpacity?: number;
        enablePoints?: boolean;
        pointSize?: number;
        pointBorderWidth?: number;
        pointColor?: string;
        curve?: 'linear' | 'monotoneX' | 'step' | 'stepBefore' | 'stepAfter';
        colors?: string[];
        [key: string]: any;
    };
}

export const LineChart: React.FC<LineChartProps> = ({
    data,
    loading = false,
    xKey = 'data',
    yKey = 'valor',
    labelFormat = (value) => `${value}`,
    height = 400,
    xAxisProps = {},
    yAxisProps = {},
    tooltipProps = {},
    chartProps = {}
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
                x: item[xKey],
                y: item[yKey],
                originalData: item // Store original data for tooltip
            }))
        }
    ];

    // Default formatter for tooltip
    const defaultFormatter = (value: number) => [labelFormat(value)];
    const defaultLabelFormatter = (label: string) => label;

    // Use custom formatters if provided, otherwise use defaults
    const valueFormatter = tooltipProps.formatter || defaultFormatter;
    const labelFormatter = tooltipProps.labelFormatter || defaultLabelFormatter;

    // Extract chart specific props
    const {
        enableGridX = true,
        enableGridY = true,
        gridXColor = '#e0e0e0',
        gridYColor = '#e0e0e0',
        lineWidth = 2,
        enableArea = false,
        areaOpacity = 0.2,
        enablePoints = true,
        pointSize = 8,
        pointBorderWidth = 2,
        pointColor = '#ffffff',
        curve = 'monotoneX',
        colors = ['#0088cc'],
        ...restChartProps
    } = chartProps;

    // Theme for better readability of axes
    const theme = {
        grid: {
            line: {
                stroke: gridXColor,
                strokeWidth: 1,
            },
        },
        axis: {
            domain: {
                line: {
                    stroke: '#777777',
                    strokeWidth: 1,
                }
            },
            ticks: {
                text: {
                    fill: '#ffffff', // Texto branco para melhor contraste no fundo escuro
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                line: {
                    stroke: '#777777',
                    strokeWidth: 1,
                },
            },
            legend: {
                text: {
                    fill: '#ffffff', // Texto branco para melhor contraste no fundo escuro
                    fontSize: 14,
                    fontWeight: 'bold',
                }
            },
        },
        tooltip: {
            container: {
                background: '#ffffff',
                color: '#333333',
                fontSize: 12,
                borderRadius: 4,
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
                padding: 8,
            },
        },
    };

    return (
        <Box sx={{ height }}>
            <ResponsiveLine
                data={chartData}
                margin={{ top: 20, right: 30, bottom: 80, left: 80 }} // Aumentando a margem inferior
                xScale={{
                    type: 'point'
                }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: false,
                    reverse: false
                }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 12, // Aumentando o espaçamento
                    tickRotation: xAxisProps.angle || 45,
                    legendOffset: 60, // Aumentando o offset da legenda
                    legendPosition: 'middle',
                    format: (value) => value,
                    ...xAxisProps
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 12, // Aumentando o espaçamento
                    tickRotation: 0,
                    legendOffset: -65, // Aumentando o offset da legenda
                    legendPosition: 'middle',
                    format: yAxisProps.tickFormatter || ((value) => labelFormat(value as number)),
                    ...yAxisProps
                }}
                enableGridX={enableGridX}
                enableGridY={enableGridY}
                theme={theme}
                colors={colors}
                lineWidth={lineWidth}
                enableArea={enableArea}
                areaOpacity={areaOpacity}
                enablePoints={enablePoints}
                pointSize={pointSize}
                pointColor={pointColor}
                pointBorderWidth={pointBorderWidth}
                pointBorderColor={{ from: 'serieColor' }}
                curve={curve}
                useMesh={true}
                tooltip={({ point }) => {
                    const value = point.data.y as number;
                    const label = point.data.x as string;
                    const [formattedValue, valueLabel] = valueFormatter(value);
                    const formattedLabel = labelFormatter(label);

                    return (
                        <Box sx={{ p: 1, bgcolor: 'background.paper', boxShadow: 1, borderRadius: 1 }}>
                            <Typography variant="body2">
                                {formattedLabel}
                            </Typography>
                            <Typography variant="body1" fontWeight="bold">
                                {formattedValue} {valueLabel && `(${valueLabel})`}
                            </Typography>
                        </Box>
                    );
                }}
                {...restChartProps}
            />
        </Box>
    );
}