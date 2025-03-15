"use client";

import { useState, useEffect } from 'react';
import { Stack, Box, Container, Typography, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const Features = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);


    const features = [
        {
            icon: <ShowChartIcon sx={{ fontSize: 40, color: "#0D95F9" }} />,
            title: "Análise Técnica Profissional",
            description: "Gráficos, dados e ferramentas que fundos pagam muito para usar",
            image: "/assets/images/imagens/Analise-Tecnica.jpg",
            highlights: ["Simule estratégias complexas em cenários históricos", "Visualize volatilidade em tempo real com heatmaps interativos", "Histograma: descubra as oportunidades do mercado para comprar e vender"]
        },
        {
            icon: <TimelineIcon sx={{ fontSize: 40, color: "#0D95F9" }} />,
            title: "Fundamentalista Além do Óbvio",
            description: "Dados que você não encontra em nenhuma outra plataforma",
            image: "/assets/images/imagens/Analise-Fundamentalista.jpg",
            highlights: ["Histórico completo de dividendos ajustados por proventos", "Valuation comparativo entre BDRs e ativos internacionais", "Alertas de balanços com insights"]
        },
        {
            icon: <NotificationsActiveIcon sx={{ fontSize: 40, color: "#0D95F9" }} />,
            title: "Alertas Que Geram Lucro",
            description: "Não apenas notificações – gatilhos para ação",
            image: "/assets/images/imagens/Alertas-Inteligentes.jpg",
            highlights: ["👉 PETR4 atingiu faixa de preço barato (5% abaixo da média histórica)", "👉 Vale3: estratégia de trava de alta tem ROI potencial de 11% neste ciclo", "👉 Dólar futuro em zona de risco alto - hora de hedge?"]
        }
    ];

    return (
        <Container maxWidth="xl">
            <Box className="text-center mb-12">
                {isLoading ? (
                    <ContentSkeleton 
                        type="text"
                        textLines={2}
                        className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
                    />
                ) : (
                    <Stack className="gap-2">
                        <MatrixRainText
                            text="Por que escolher a Auge Invest?"
                            className="text-4xl font-bold text-white mb-4"
                        />
                        <Typography variant="h6" className="text-white/70">
                            Tecnologia de Hedge Fund, Preço de Startup
                        </Typography>
                    </Stack>
                )}
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    {isLoading ? (
                        <ContentSkeleton 
                            type="card"
                            cardHeight={500}
                            className="bg-[#ffffff0a] backdrop-blur-sm"
                        />
                    ) : (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="relative h-[500px] rounded-xl overflow-hidden"
                            >
                                <OptimizedImage
                                    src={features[activeFeature].image}
                                    alt={features[activeFeature].title}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover w-full h-full"
                                    loadingClassName="scale-100 blur-lg grayscale"
                                    quality={90}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8">
                                    <Typography variant="h4" className="text-white mb-3">
                                        {features[activeFeature].title}
                                    </Typography>
                                    <Typography className="text-white/70 mb-4">
                                        {features[activeFeature].description}
                                    </Typography>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )}
                </Grid>

                <Grid item xs={12} md={6}>
                    <Grid container spacing={3}>
                        {isLoading ? (
                            Array(3).fill(0).map((_, index) => (
                                <Grid item xs={12} key={index}>
                                    <ContentSkeleton 
                                        type="card"
                                        cardHeight={180}
                                        className="bg-[#ffffff0a] backdrop-blur-sm"
                                    />
                                </Grid>
                            ))
                        ) : (
                            features.map((feature, index) => (
                                <Grid item xs={12} key={index}>
                                    <motion.div
                                        className={`p-6 rounded-xl cursor-pointer transition-all ${activeFeature === index
                                            ? 'bg-[#0D95F9]/10 border border-[#0D95F9]/30'
                                            : 'bg-white/5 hover:bg-white/10'
                                            }`}
                                        onClick={() => setActiveFeature(index)}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-lg bg-white/5">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <Typography variant="h6" className="text-white mb-2">
                                                    {feature.title}
                                                </Typography>
                                                <Typography className="text-white/70 mb-3">
                                                    {feature.description}
                                                </Typography>
                                                {activeFeature === index && (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="flex gap-2 flex-wrap"
                                                    >
                                                        {feature.highlights.map((highlight, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-3 py-1 rounded-full bg-[#0969A6]/20 text-[#52BCFF] text-sm"
                                                            >
                                                                {highlight}
                                                            </span>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </Grid>
                            ))

                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};