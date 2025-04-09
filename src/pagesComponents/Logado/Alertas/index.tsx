"use client";

import { Container, Typography } from '@mui/material';
import { PageTransition } from '@/components/PageTransition';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { ProgressiveLoad } from '@/components/ProgressiveLoad';
import { ContentSkeleton } from '@/components/Skeletons/ContentSkeleton';

import { AlertsTable } from './components/AlertsTable';
import { AddAlertButton } from './components/AddAlertButton';
import { BackgroundContainer, PageHeader, ActionContainer } from './styled';

export const Alertas = () => {
    return (
        <PageTransition direction="up" duration={0.4} distance={30}>
            <ErrorBoundary>
                <BackgroundContainer>
                    <Container maxWidth="xl">
                        <PageHeader>
                            <Typography variant="h2" component="h1">
                                Alertas de Preço
                            </Typography>
                        </PageHeader>

                        <ActionContainer>
                            <AddAlertButton />
                        </ActionContainer>

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