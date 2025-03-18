"use client";

import { Container, Grid } from '@mui/material';
import { PageTransition } from '@/components/PageTransition';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Empresas } from './components/Empresas';
import { Indices } from './components/Indices';
import { Bdr } from './components/BDR';
import { Selic } from './components/Outros/Selic';
import { Inflacao } from './components/Outros/Inflacao';
import { PosicaoUsuario } from './components/Outros/PosicaoUsuario';
import { Moedas } from './components/Outros/Moedas';
import { Commodities } from './components/Outros/Commodities';
import { Debentures } from './components/Outros/Debentures';
import { BackgroundContainer, DashboardItem } from './styled';

export const VisaoEconomia = () => {
    return (
        <PageTransition direction="up" duration={0.4} distance={30}>
            <ErrorBoundary>
                <BackgroundContainer>
                    <Container maxWidth="xl" sx={{ py: 4 }}>
                        <Grid container spacing={3}>
                            {/* Left Column - 8/12 of width */}
                            <Grid item xs={12} lg={8}>
                                <Grid container spacing={3}>
                                    {/* Stocks Component */}
                                    <Grid item xs={12}>
                                        <DashboardItem>
                                            <Empresas />
                                        </DashboardItem>
                                    </Grid>

                                    {/* Market Indices Component */}
                                    <Grid item xs={12}>
                                        <DashboardItem>
                                            <Indices />
                                        </DashboardItem>
                                    </Grid>

                                    {/* BDRs Component */}
                                    <Grid item xs={12}>
                                        <DashboardItem>
                                            <Bdr />
                                        </DashboardItem>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* Right Column - 4/12 of width */}
                            <Grid item xs={12} lg={4}>
                                <Grid container spacing={3}>

                                    {/* User Position */}
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <DashboardItem>
                                            <PosicaoUsuario />
                                        </DashboardItem>
                                    </Grid>

                                    {/* Selic Rate */}
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <DashboardItem>
                                            <Selic />
                                        </DashboardItem>
                                    </Grid>

                                    {/* Inflation Chart */}
                                    <Grid item xs={12}>
                                        <DashboardItem>
                                            <Inflacao />
                                        </DashboardItem>
                                    </Grid>

                                    {/* Currency Exchange */}
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

                                    {/* Debentures */}
                                    <Grid item xs={12}>
                                        <DashboardItem>
                                            <Debentures />
                                        </DashboardItem>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* Bottom Calendars - Full Width */}
                            <Grid item xs={12}>
                                <DashboardItem>Calendário de Eventos Econômicos</DashboardItem>
                            </Grid>
                            <Grid item xs={12}>
                                <DashboardItem>Calendário de Proventos</DashboardItem>
                            </Grid>
                        </Grid>
                    </Container>
                </BackgroundContainer>
            </ErrorBoundary>
        </PageTransition>
    );
};