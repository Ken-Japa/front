"use client";

import { Container, Grid, Typography, Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import { PageTransition } from '@/components/PageTransition';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { PositionSection } from './components/PositionSection';
import { BackgroundContainer } from './styled';

export const Dashboard = () => {
    const { data: session } = useSession();

    return (
        <PageTransition direction="up" duration={0.4} distance={30}>
            <ErrorBoundary>
                <BackgroundContainer>
                    <Container maxWidth="xl" sx={{ py: 4 }}>
                        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
                            Posição de {session?.user?.name}
                        </Typography>

                        <Box sx={{ mt: 4 }}>
                            {/* Real Positions */}
                            <PositionSection
                                title="Posições Reais"
                                type="real"
                            />

                            {/* Mock Positions */}
                            <Box sx={{ mt: 6 }}>
                                <PositionSection
                                    title="Posições Fictícias"
                                    type="mock"
                                />
                            </Box>
                        </Box>
                    </Container>
                </BackgroundContainer>
            </ErrorBoundary>
        </PageTransition>
    );
};