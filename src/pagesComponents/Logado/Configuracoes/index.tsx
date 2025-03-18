"use client";

import { Container, Typography, Alert, Snackbar } from '@mui/material';
import { PageTransition } from '@/components/PageTransition';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { useState } from 'react';
import { ContentSkeleton } from '@/components/Skeletons/ContentSkeleton';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { ProgressiveLoad } from '@/components/ProgressiveLoad';
import { AppearanceSettings } from './components/AppearanceSettings';
import { NotificationSettings } from './components/NotificationSettings';
import { AlertPreferences } from './components/AlertPreferences';
import { useSettings } from './hooks/useSettings';
import { ConfiguracoesWrapper } from './styled';

export const Configuracoes = () => {
    const {
        settings,
        error,
        updateNotifications,
        updatePercentages
    } = useSettings();
    const [snackbar, setSnackbar] = useState({ open: false, message: '', type: 'success' as 'success' | 'error' });

    const handleNotificationChange = (type: keyof typeof settings.notifications) => async (e: React.ChangeEvent<HTMLInputElement>) => {
        const success = await updateNotifications(type, e.target.checked);
        setSnackbar({
            open: true,
            message: success ? 'Configurações atualizadas' : 'Erro ao atualizar configurações',
            type: success ? 'success' : 'error'
        });
    };

    const handlePercentageChange = (type: 'buy' | 'sell') => async (event: Event, newValue: number | number[]) => {
        const success = await updatePercentages(type, newValue as number);
        setSnackbar({
            open: true,
            message: success ? 'Configurações atualizadas' : 'Erro ao atualizar configurações',
            type: success ? 'success' : 'error'
        });
    };

    if (error) {
        return (
            <ConfiguracoesWrapper>
                <Container maxWidth="md" sx={{ py: 4 }}>
                    <Alert severity="error">{error}</Alert>
                </Container>
            </ConfiguracoesWrapper>
        );
    }

    return (
        <PageTransition direction="up" duration={0.4} distance={30}>
            <ErrorBoundary>
                <ConfiguracoesWrapper>
                    <Container maxWidth="md" sx={{ py: 4 }}>
                        <Typography 
                                            variant="h4" 
                                            component="h1" 
                                            gutterBottom 
                                            sx={{ mb: 4, textAlign: 'center' }}
                                        >
                                            Configurações
                                        </Typography>

                        <SuspenseWrapper fallback={<ContentSkeleton type="form" formFields={1} />}>
                            <ProgressiveLoad delay={0.2}>
                                <AppearanceSettings />
                            </ProgressiveLoad>
                        </SuspenseWrapper>

                        <SuspenseWrapper fallback={<ContentSkeleton type="form" formFields={3} />}>
                            <ProgressiveLoad delay={0.4}>
                                <NotificationSettings
                                    notifications={settings.notifications}
                                    onNotificationChange={handleNotificationChange}
                                />
                            </ProgressiveLoad>
                        </SuspenseWrapper>

                        <SuspenseWrapper fallback={<ContentSkeleton type="form" formFields={2} />}>
                            <ProgressiveLoad delay={0.6}>
                                <AlertPreferences
                                    percentages={settings.defaultPercentages}
                                    onPercentageChange={handlePercentageChange}
                                />
                            </ProgressiveLoad>
                        </SuspenseWrapper>
                        <Snackbar
                            open={snackbar.open}
                            autoHideDuration={3000}
                            onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                        >
                            <Alert severity={snackbar.type} sx={{ width: '100%' }}>
                                {snackbar.message}
                            </Alert>
                        </Snackbar>
                    </Container>
                </ConfiguracoesWrapper>
            </ErrorBoundary>
        </PageTransition>
    );
};