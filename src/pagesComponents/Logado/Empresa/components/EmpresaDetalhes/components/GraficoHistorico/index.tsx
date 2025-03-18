import { Paper, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import { LineChart } from '@/components/Charts/LineChart';

type PeriodType = '1D' | '5D' | '1M' | '6M' | '1A' | '5A';

export const GraficoHistorico = () => {
    const [period, setPeriod] = useState<PeriodType>('1M');

    return (
        <Paper sx={{ p: 3 }}>
            <Box sx={{ mb: 2 }}>
                <ToggleButtonGroup
                    value={period}
                    exclusive
                    onChange={(_, newPeriod) => newPeriod && setPeriod(newPeriod)}
                    size="small"
                >
                    <ToggleButton value="1D">1D</ToggleButton>
                    <ToggleButton value="5D">5D</ToggleButton>
                    <ToggleButton value="1M">1M</ToggleButton>
                    <ToggleButton value="6M">6M</ToggleButton>
                    <ToggleButton value="1A">1A</ToggleButton>
                    <ToggleButton value="5A">5A</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Box sx={{ height: 400 }}>
                <LineChart
                    data={[]}
                    loading={false}
                />
            </Box>
        </Paper>
    );
};