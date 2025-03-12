"use client";

import { Stack, Typography, Grid } from "@mui/material";
import { SectionSolutions, FeatureCard } from "./styled";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIcon from '@mui/icons-material/Update';

export const Solutions = () => {
    const features = [
        {
            icon: <ShowChartIcon sx={{ fontSize: 40 }} />,
            title: "Análise Avançada",
            description: "Ferramentas poderosas de análise técnica e fundamentalista para tomada de decisões mais precisas."
        },
        {
            icon: <NotificationsActiveIcon sx={{ fontSize: 40 }} />,
            title: "Alertas em Tempo Real",
            description: "Receba notificações instantâneas sobre movimentações importantes do mercado e oportunidades de investimento."
        },
        {
            icon: <TimelineIcon sx={{ fontSize: 40 }} />,
            title: "Histórico Detalhado",
            description: "Acesso a dados históricos completos para análise de tendências e padrões de mercado."
        },
        {
            icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
            title: "Acompanhamento de Performance",
            description: "Monitore o desempenho de seus investimentos com gráficos e relatórios personalizados."
        },
        {
            icon: <SecurityIcon sx={{ fontSize: 40 }} />,
            title: "Segurança Avançada",
            description: "Proteção de dados de última geração para garantir a segurança de suas informações."
        },
        {
            icon: <UpdateIcon sx={{ fontSize: 40 }} />,
            title: "Atualizações Constantes",
            description: "Plataforma em constante evolução com novas funcionalidades e melhorias."
        }
    ];

    return (
        <SectionSolutions>
            <div className="opacity p-10">
                <Stack spacing={8} alignItems="center">
                    <Stack spacing={3} alignItems="center">
                        <MatrixRainText 
                            text="Nossas Soluções" 
                            className="text-white text-3xl font-bold"
                        />
                        <Typography 
                            variant="h6" 
                            className="text-white text-center max-w-3xl"
                        >
                            Descubra como nossa plataforma pode transformar sua experiência de investimento com ferramentas poderosas e insights valiosos
                        </Typography>
                    </Stack>

                    <Grid container spacing={4} maxWidth="1200px">
                        {features.map((feature, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <FeatureCard>
                                    <div className="icon-container">
                                        {feature.icon}
                                    </div>
                                    <Typography 
                                        variant="h6" 
                                        className="feature-title"
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        className="feature-description"
                                    >
                                        {feature.description}
                                    </Typography>
                                </FeatureCard>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </div>
        </SectionSolutions>
    );
};