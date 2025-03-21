'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

import { PageTransition } from '@/components/PageTransition';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ProgressiveLoad } from '@/components/ProgressiveLoad';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';

import { DadosAnaliseFundamental } from './types';
import { DataInputForm } from './components/DataInputForm';
import { MetricsDisplay } from './components/MetricsDisplay';
import { HelpDialog } from './components/HelpDialog';
import { BackgroundContainer, ContentContainer, StyledPaper } from './styled';

export const AnaliseFundamentalista = () => {
    const [helpOpen, setHelpOpen] = useState(false);
    const { control, watch } = useForm<DadosAnaliseFundamental>({
        defaultValues: {
            precoAcao: 0,
            acoesCirculacao: 0,
            receitaLiquida: 0,
        }
    });

    const formValues = watch();

    return (
        <PageTransition>
            <ErrorBoundary>
                <BackgroundContainer >
                    <Container maxWidth="lg" >
                        <ContentContainer>
                            <SuspenseWrapper>
                                <ProgressiveLoad>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                                        <Typography variant="h4" gutterBottom>
                                            Análise Fundamentalista
                                        </Typography>
                                        <IconButton onClick={() => setHelpOpen(true)} sx={{ ml: 2 }}>
                                            <HelpIcon />
                                        </IconButton>
                                    </Box>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={6}>
                                            <StyledPaper>
                                                <DataInputForm control={control} />
                                            </StyledPaper>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <StyledPaper>
                                                <MetricsDisplay data={formValues} />
                                            </StyledPaper>
                                        </Grid>
                                    </Grid>

                                    <HelpDialog
                                        open={helpOpen}
                                        onClose={() => setHelpOpen(false)}
                                    />
                                </ProgressiveLoad>
                            </SuspenseWrapper>
                        </ContentContainer>
                    </Container>
                </BackgroundContainer>
            </ErrorBoundary>
        </PageTransition>
    );
}