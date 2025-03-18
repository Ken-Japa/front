"use client";

import { Container, Grid, Paper } from '@mui/material';
import { PageTransition } from '@/components/PageTransition';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { styled } from '@mui/material/styles';
import { Empresas } from './components/Empresas';
import { Indices } from './components/Indices';
import { Bdr } from './components/BDR';
import { Selic } from './components/Outros/Selic';
import { Inflacao } from './components/Outros/Inflacao';
import { PosicaoUsuario } from './components/Outros/PosicaoUsuario';

const DashboardItem = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    height: '100%',
    background: theme.palette.mode === 'dark'
        ? 'rgba(19, 47, 76, 0.4)'
        : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.1)'
        }`,
}));

export const VisaoEconomia = () => {
    return (
        <PageTransition direction="up" duration={0.4} distance={30}>
            <ErrorBoundary>

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
                                    <DashboardItem>Moedas</DashboardItem>
                                </Grid>

                                {/* IFIX */}
                                <Grid item xs={12}>
                                    <DashboardItem>IFIX</DashboardItem>
                                </Grid>

                                {/* Commodities */}
                                <Grid item xs={12}>
                                    <DashboardItem>Commodities</DashboardItem>
                                </Grid>

                                {/* Debentures */}
                                <Grid item xs={12}>
                                    <DashboardItem>Debêntures</DashboardItem>
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

            </ErrorBoundary>
        </PageTransition>
    );
};