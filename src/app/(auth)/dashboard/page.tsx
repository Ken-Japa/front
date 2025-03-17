'use client';

import { Container, Grid, Paper, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { PageTransition } from '@/components/PageTransition';

export default function DashboardPage() {
    const { data: session } = useSession();

    return (
        <PageTransition direction="up" duration={0.4} distance={30}>
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Bem-vindo, {session?.user?.name}!
                </Typography>

                <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={8}>
                        <Paper sx={{ p: 3, height: '100%' }}>
                            {/* Main content area */}
                            <Typography variant="h6" gutterBottom>
                                Atividades Recentes
                            </Typography>
                            {/* Add your dashboard content here */}
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 3 }}>
                            {/* Sidebar content */}
                            <Typography variant="h6" gutterBottom>
                                Resumo
                            </Typography>
                            {/* Add your sidebar content here */}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </PageTransition>
    );
}