"use client";

import { Stack, Typography, Grid, Container, Button } from "@mui/material";
import { SectionSolutions, FeatureCard } from "./styled";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIcon from '@mui/icons-material/Update';
import BarChartIcon from '@mui/icons-material/BarChart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useState, useEffect } from 'react';
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const Solutions = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const features = [
        {
            icon: <ShowChartIcon sx={{ fontSize: 40 }} />,
            title: "Análise Avançada",
            description: "Ferramentas poderosas de análise técnica e fundamentalista para tomada de decisões mais precisas.",
            details: ["Indicadores técnicos personalizáveis", "Análise fundamentalista detalhada", "Gráficos interativos"]
        },
        {
            icon: <NotificationsActiveIcon sx={{ fontSize: 40 }} />,
            title: "Alertas em Tempo Real",
            description: "Receba notificações instantâneas sobre movimentações importantes do mercado e oportunidades de investimento.",
            details: ["Alertas personalizados", "Notificações push", "Monitoramento 24/7"]
        },
        {
            icon: <TimelineIcon sx={{ fontSize: 40 }} />,
            title: "Histórico Detalhado",
            description: "Acesso a dados históricos completos para análise de tendências e padrões de mercado.",
            details: ["Dados históricos completos", "Análise de tendências", "Backtest de estratégias"]
        },
        {
            icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
            title: "Acompanhamento de Performance",
            description: "Monitore o desempenho de seus investimentos com gráficos e relatórios personalizados.",
            details: ["Relatórios detalhados", "Métricas de performance", "Dashboard personalizado"]
        },
        {
            icon: <SecurityIcon sx={{ fontSize: 40 }} />,
            title: "Segurança Avançada",
            description: "Proteção de dados de última geração para garantir a segurança de suas informações.",
            details: ["Criptografia de ponta", "Autenticação em 2 fatores", "Backup automático"]
        },
        {
            icon: <UpdateIcon sx={{ fontSize: 40 }} />,
            title: "Atualizações Constantes",
            description: "Plataforma em constante evolução com novas funcionalidades e melhorias.",
            details: ["Atualizações regulares", "Novas funcionalidades", "Melhorias contínuas"]
        },
        {
            icon: <BarChartIcon sx={{ fontSize: 40 }} />,
            title: "Análise Preditiva",
            description: "Algoritmos avançados de machine learning para previsão de tendências de mercado.",
            details: ["IA para análise", "Previsões de mercado", "Padrões históricos"]
        },
        {
            icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
            title: "Suporte Especializado",
            description: "Equipe de suporte técnico disponível para auxiliar em suas dúvidas e necessidades.",
            details: ["Suporte 24/7", "Especialistas disponíveis", "Atendimento rápido"]
        }
    ];

    return (
        <PageTransition>
            <ErrorBoundary>
                <SectionSolutions>
                    <Container maxWidth="xl" className="py-16">
                        {isLoading ? (
                            <Stack spacing={8} alignItems="center">
                                {/* Title and Subtitle Skeleton */}
                                <Stack spacing={3} alignItems="center">
                                    <ContentSkeleton />
                                    <ContentSkeleton type="text" />
                                </Stack>

                                {/* Features Grid Skeleton */}
                                <Grid container spacing={4} justifyContent="center">
                                    {Array(8).fill(0).map((_, index) => (
                                        <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
                                            <ContentSkeleton type="card" />
                                        </Grid>
                                    ))}
                                </Grid>

                                {/* Button Skeleton */}
                                <ContentSkeleton />
                            </Stack>
                        ) : (
                            <Stack spacing={8} alignItems="center">
                                <Stack spacing={3} alignItems="center">
                                    <MatrixRainText
                                        text="Recursos Avançados"
                                        className="text-white text-4xl font-bold"
                                    />
                                    <Typography
                                        variant="h6"
                                        className="text-white/80 text-center max-w-3xl"
                                    >
                                        Descubra como nossa plataforma pode transformar sua experiência de investimento com ferramentas poderosas e insights valiosos
                                    </Typography>
                                </Stack>

                                <Grid container spacing={4} justifyContent="center">
                                    {features.map((feature, index) => (
                                        <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
                                            <FeatureCard
                                                onMouseEnter={() => setHoveredCard(index)}
                                                onMouseLeave={() => setHoveredCard(null)}
                                                className="transition-all duration-300 hover:scale-105"
                                            >
                                                <div className="icon-container text-[#0D95F9]">
                                                    {feature.icon}
                                                </div>
                                                <Typography
                                                    variant="h6"
                                                    className="feature-title mb-3"
                                                >
                                                    {feature.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    className="feature-description mb-4"
                                                >
                                                    {feature.description}
                                                </Typography>
                                                {hoveredCard === index && (
                                                    <ul className="text-sm space-y-2 text-white/70">
                                                        {feature.details.map((detail, idx) => (
                                                            <li key={idx} className="flex items-center">
                                                                <span className="w-2 h-2 bg-[#0D95F9] rounded-full mr-2"></span>
                                                                {detail}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </FeatureCard>
                                        </Grid>
                                    ))}
                                </Grid>

                                <Button
                                    variant="contained"
                                    color="info"
                                    size="large"
                                    href="/register"
                                    className="mt-8 px-8 py-3 text-lg"
                                >
                                    Comece Agora
                                </Button>
                            </Stack>
                        )}
                    </Container>
                </SectionSolutions>
            </ErrorBoundary>
        </PageTransition>
    );
};