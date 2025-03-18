import { Box, Grid, Paper } from '@mui/material';
import { PerformanceChart } from './components/PerformanceChart';
import { PositionSummary } from './components/PositionSummary';
import { RecentActivities } from './components/RecentActivities';
import { PositionsList } from './components/PositionsList';
import { SectionTitle } from './styled';

interface PositionSectionProps {
    title: string;
    type: 'real' | 'mock';
}

export const PositionSection = ({ title, type }: PositionSectionProps) => {
    return (
        <Box>
            <SectionTitle variant="h5" gutterBottom>
                {title}
            </SectionTitle>

            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <PerformanceChart type={type} />
                    </Paper>
                </Grid>

                {/* Right Side Cards */}
                <Grid item xs={12} md={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2 }}>
                                <PositionSummary type={type} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2 }}>
                                <RecentActivities type={type} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Positions List */}
                <Grid item xs={12}>
                    <PositionsList type={type} />
                </Grid>
            </Grid>
        </Box>
    );
};