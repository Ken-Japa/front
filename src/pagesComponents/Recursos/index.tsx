"use client";

import { Stack, Typography, Grid, Container, Button } from "@mui/material";
import { SectionSolutions, FeatureCard } from "./styled";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HistoryIcon from '@mui/icons-material/History';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIcon from '@mui/icons-material/Update';
import HandymanIcon from '@mui/icons-material/Handyman';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';

interface Testimonial {
    name: string;
    role: string;
    comment: string;
}
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
            icon: <QueryStatsIcon sx={{ fontSize: 40 }} />,
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
            icon: <HistoryIcon sx={{ fontSize: 40 }} />,
            title: "Histórico Detalhado",
            description: "Acesso a dados históricos completos para análise de tendências e padrões de mercado.",
            details: ["Dados históricos completos", "Análise de tendências", "Histórico de derivativos"]
        },
        {
            icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
            title: "Acompanhamento de Performance",
            description: "Monitore o desempenho de seus investimentos com gráficos e relatórios personalizados.",
            details: ["Posições reais e fictícias", "Métricas de performance", "Dashboard personalizado"]
        },
        {
            icon: <HandymanIcon sx={{ fontSize: 40 }} />,
            title: "Ferramentas exclusivas",
            description: "Otimize seus investimentos com ferramentas exclusivas",
            details: ["Dashboard com visão geral da economia", "Histograma definindo oportunidades", "Plataforma disponível para celulares"]
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
            icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
            title: "Suporte Especializado",
            description: "Equipe de suporte técnico disponível para auxiliar em suas dúvidas e necessidades.",
            details: ["Canais de comunicação", "Especialistas disponíveis", "Atendimento rápido"]
        }
    ];

    const testimonials: Testimonial[] = [
        {
            name: "Carlos Silva",
            role: "Investidor Profissional",
            comment: "As ferramentas de análise avançada revolucionaram minha forma de investir. A precisão e facilidade de uso são impressionantes."
        },
        {
            name: "Ana Martins",
            role: "Day Trader",
            comment: "Os alertas em tempo real e o suporte técnico são excepcionais. Consegui otimizar significativamente meus resultados."
        },
        {
            name: "Roberto Santos",
            role: "Gestor de Fundos",
            comment: "A plataforma oferece recursos que antes só estavam disponíveis para grandes instituições. Democratização na prática."
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
                                        className="text-white/90 text-center max-w-3xl"
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
                                                    <ul className="text-sm space-y-2 text-white/85">
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

                                {/* Add Testimonials Section */}
                                <div className="w-full">
                                    <Stack spacing={4} alignItems="center">
                                        <Typography
                                            variant="h4"
                                            className="text-center text-[#0D95F9]"
                                            component={motion.h2}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            O que nossos usuários dizem:
                                        </Typography>

                                        <Grid container spacing={4} justifyContent="center">
                                            {testimonials.map((testimonial, index) => (
                                                <Grid item xs={12} md={4} key={index}>
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                                    >
                                                        <div className="bg-[#ffffff0a] p-6 rounded-lg backdrop-blur-sm hover:bg-[#ffffff15] transition-all duration-300">

                                                            <Typography className="text-white/90 mb-4 italic">
                                                                &quot;{testimonial.comment}&quot;
                                                            </Typography>
                                                            <Divider sx={{ bgcolor: 'rgba(13, 149, 249, 0.2)', my: 2 }} />
                                                            <Typography variant="subtitle1" className="text-[#0D95F9] font-bold">
                                                                {testimonial.name}
                                                            </Typography>
                                                            <Typography variant="body2" className="text-white/70">
                                                                {testimonial.role}
                                                            </Typography>

                                                        </div>
                                                    </motion.div>
                                                </Grid>

                                            ))}
                                        </Grid>
                                    </Stack>
                                </div>


                                <div className="w-full py-12 bg-[#0D95F9] bg-opacity-10 rounded-lg">
                                    <Stack spacing={3} alignItems="center">
                                        <Typography variant="h4" className="text-white text-center">
                                            Pronto para transformar seus investimentos?
                                        </Typography>
                                        <Typography variant="body1" className="text-white/70 text-center max-w-2xl">
                                            Comece agora mesmo a usar nossas ferramentas avançadas e tome decisões mais precisas no mercado financeiro.
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="info"
                                            size="large"
                                            href="/register"
                                            className="mt-4 px-8 py-3"
                                        >
                                            Começar Gratuitamente
                                        </Button>
                                    </Stack>
                                </div>
                            </Stack>
                        )}
                    </Container>
                </SectionSolutions>
            </ErrorBoundary>
        </PageTransition >
    );
};