"use client";

import { Container, Typography } from '@mui/material';
import { PageTransition } from '@/components/PageTransition';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const VisaoEconomia = () => {

    return (
        <PageTransition direction="up" duration={0.4} distance={30}>
            <ErrorBoundary>
                <Container maxWidth="xl" sx={{ py: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Visão Economia
                    </Typography>


                </Container>
            </ErrorBoundary>
        </PageTransition>
    );
};