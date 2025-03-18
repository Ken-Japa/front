"use client";

import { Container, Typography, Box } from '@mui/material';
import { PageTransition } from '@/components/PageTransition';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { AlertsTable } from './components/AlertsTable';
import { AddAlertButton } from './components/AddAlertButton';
import { BackgroundContainer } from './styled';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { ProgressiveLoad } from '@/components/ProgressiveLoad';
import { ContentSkeleton } from '@/components/Skeletons/ContentSkeleton';

export const Alertas = () => {
    return (
        <PageTransition direction="up" duration={0.4} distance={30}>
            <ErrorBoundary>
                <BackgroundContainer>
                    <Container maxWidth="xl" sx={{ py: 4 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                            <Typography variant="h4" component="h1">
                                Alertas de Preço
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', mb: 4 }}>
                            <AddAlertButton />
                        </Box>

                        <SuspenseWrapper
                            fallback={
                                <ContentSkeleton 
                                    type="card"
                                    cardHeight={400}
                                    className="mt-4"
                                />
                            }
                        >
                            <ProgressiveLoad delay={0.2}>
                                <AlertsTable />
                            </ProgressiveLoad>
                        </SuspenseWrapper>
                    </Container>
                </BackgroundContainer>
            </ErrorBoundary>
        </PageTransition>
    );
};