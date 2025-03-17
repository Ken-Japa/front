import { Container, Skeleton, Grid, Paper } from '@mui/material';

export default function DashboardLoading() {
    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Skeleton variant="text" width={200} height={40} />
            <Skeleton variant="text" width={300} height={24} sx={{ mb: 3 }} />

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Skeleton variant="text" width={200} height={32} />
                        <Skeleton variant="rectangular" height={200} sx={{ mt: 2 }} />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Skeleton variant="text" width={100} height={32} />
                        <Skeleton variant="rectangular" height={150} sx={{ mt: 2 }} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}