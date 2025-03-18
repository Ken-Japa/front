import { Box, Grid, Paper } from '@mui/material';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { ContentSkeleton } from '@/components/Skeletons/ContentSkeleton';
import { ProgressiveLoad } from '@/components/ProgressiveLoad';
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
                        <SuspenseWrapper fallback={<ContentSkeleton type="card" cardHeight={300} />}>
                            <ProgressiveLoad delay={0.3}>
                                <PerformanceChart type={type} />
                            </ProgressiveLoad>
                        </SuspenseWrapper>
                    </Paper>
                </Grid>

                {/* Right Side Cards */}
                <Grid item xs={12} md={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2 }}>
                                <SuspenseWrapper fallback={<ContentSkeleton type="text" textLines={4} />}>
                                    <ProgressiveLoad delay={0.4}>
                                        <PositionSummary type={type} />
                                    </ProgressiveLoad>
                                </SuspenseWrapper>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2 }}>
                                <SuspenseWrapper fallback={<ContentSkeleton type="text" textLines={5} />}>
                                    <ProgressiveLoad delay={0.5}>
                                        <RecentActivities type={type} />
                                    </ProgressiveLoad>
                                </SuspenseWrapper>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Positions List */}
                <Grid item xs={12}>
                    <SuspenseWrapper fallback={<ContentSkeleton type="card" cardHeight={200} />}>
                        <ProgressiveLoad delay={0.6}>
                            <PositionsList type={type} />
                        </ProgressiveLoad>
                    </SuspenseWrapper>
                </Grid>
            </Grid>
        </Box>
    );
};