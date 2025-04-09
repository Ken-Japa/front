"use client";

import React from 'react';
import { Container, Grid } from '@mui/material';
import { ErrorBoundary } from '@/components/Feedback/ErrorBoundary';
import { PageTransition } from '@/components/Utils/PageTransition';
import { SuspenseWrapper } from '@/components/Feedback/SuspenseWrapper';
import { ProgressiveLoad } from '@/components/Feedback/ProgressiveLoad';
import { ContentSkeleton } from '@/components/Feedback/Skeletons/ContentSkeleton';

// Componentes da página
import { Empresas } from './components/Empresas';
import { Indices } from './components/Indices';
import { Bdr } from './components/BDR';
import { Selic } from './components/Outros/Selic';
import { Inflacao } from './components/Outros/Inflacao';
import { PosicaoUsuario } from './components/Outros/PosicaoUsuario';
import { Moedas } from './components/Outros/Moedas';
import { Commodities } from './components/Outros/Commodities';
import { Debentures } from './components/Outros/Debentures';
import { Calendario } from '../components/Calendario';

// Estilos
import { BackgroundContainer, DashboardItem } from './styled';

export const VisaoEconomia = () => {
    return (
        <ErrorBoundary>
            <PageTransition direction="up" duration={0.4} distance={30}>
                <SuspenseWrapper fallback={<ContentSkeleton type="card" height={800} />}>
                    <ProgressiveLoad threshold={0.1} delay={0.2}>
                        <BackgroundContainer>
                            <Container maxWidth="xl" sx={{ py: 4 }}>
                                <Grid container spacing={3}>
                                    {/* Coluna Esquerda - 8/12 da largura */}
                                    <Grid item xs={12} lg={8}>
                                        <Grid container spacing={3}>
                                            {/* Componente de Ações */}
                                            <Grid item xs={12}>
                                                <DashboardItem>
                                                    <Empresas />
                                                </DashboardItem>
                                            </Grid>

                                            {/* Componente de Índices de Mercado */}
                                            <Grid item xs={12}>
                                                <DashboardItem>
                                                    <Indices />
                                                </DashboardItem>
                                            </Grid>

                                            {/* Componente de BDRs */}
                                            <Grid item xs={12}>
                                                <DashboardItem>
                                                    <Bdr />
                                                </DashboardItem>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    {/* Coluna Direita - 4/12 da largura */}
                                    <Grid item xs={12} lg={4}>
                                        <Grid container spacing={3}>
                                            {/* Posição do Usuário */}
                                            <Grid item xs={12} sm={6} lg={12}>
                                                <DashboardItem>
                                                    <PosicaoUsuario />
                                                </DashboardItem>
                                            </Grid>

                                            {/* Taxa Selic */}
                                            <Grid item xs={12} sm={6} lg={12}>
                                                <DashboardItem>
                                                    <Selic />
                                                </DashboardItem>
                                            </Grid>

                                            {/* Gráfico de Inflação */}
                                            <Grid item xs={12}>
                                                <DashboardItem>
                                                    <Inflacao />
                                                </DashboardItem>
                                            </Grid>

                                            {/* Câmbio de Moedas */}
                                            <Grid item xs={12}>
                                                <DashboardItem>
                                                    <Moedas />
                                                </DashboardItem>
                                            </Grid>

                                            {/* IFIX */}
                                            <Grid item xs={12}>
                                                <DashboardItem>IFIX</DashboardItem>
                                            </Grid>

                                            {/* Commodities */}
                                            <Grid item xs={12}>
                                                <DashboardItem>
                                                    <Commodities />
                                                </DashboardItem>
                                            </Grid>

                                            {/* Debêntures */}
                                            <Grid item xs={12}>
                                                <DashboardItem>
                                                    <Debentures />
                                                </DashboardItem>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    {/* Calendários na parte inferior - Largura total */}
                                    <Grid item xs={12}>
                                        <DashboardItem>
                                            <Calendario />
                                        </DashboardItem>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <DashboardItem>Calendário de Proventos</DashboardItem>
                                    </Grid>
                                </Grid>
                            </Container>
                        </BackgroundContainer>
                    </ProgressiveLoad>
                </SuspenseWrapper>
            </PageTransition>
        </ErrorBoundary>
    );
};