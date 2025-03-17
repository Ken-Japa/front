"use client";

import { Container, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { PageTransition } from '@/components/PageTransition';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const Perfil = () => {
    const { data: session } = useSession();

    return (
        <PageTransition direction="up" duration={0.4} distance={30}>
            <ErrorBoundary>
                <Container maxWidth="xl" sx={{ py: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Bem-vindo, {session?.user?.name}!
                    </Typography>


                </Container>
            </ErrorBoundary>
        </PageTransition>
    );
};