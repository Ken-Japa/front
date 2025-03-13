"use client";

import { useState } from 'react';
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import Image from 'next/image';

export const Features = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: <ShowChartIcon sx={{ fontSize: 40, color: "#0D95F9" }} />,
            title: "Análise Técnica",
            description: "Ferramentas avançadas para análise de mercado",
            image: "/assets/images/features/technical.png",
            highlights: ["Gráficos interativos", "Indicadores personalizáveis", "Análise em tempo real"]
        },
        {
            icon: <TimelineIcon sx={{ fontSize: 40, color: "#0D95F9" }} />,
            title: "Análise Fundamentalista",
            description: "Dados fundamentalistas completos",
            image: "/assets/images/features/fundamental.png",
            highlights: ["Balanços detalhados", "Indicadores financeiros", "Comparação entre ativos"]
        },
        {
            icon: <NotificationsActiveIcon sx={{ fontSize: 40, color: "#0D95F9" }} />,
            title: "Alertas Inteligentes",
            description: "Notificações personalizadas para suas estratégias",
            image: "/assets/images/features/alerts.png",
            highlights: ["Alertas de preço", "Notificações push", "Configuração flexível"]
        }
    ];

    return (
        <Container maxWidth="xl">
            <Box className="text-center mb-12">
                <MatrixRainText 
                    text="Por que escolher a Auge Invest?" 
                    className="text-4xl font-bold text-white mb-4"
                />
                <Typography variant="h6" className="text-white/70">
                    Descubra as ferramentas que irão transformar sua experiência de investimento
                </Typography>
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFeature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="relative h-[400px] rounded-xl overflow-hidden"
                        >
                            <Image
                                src={features[activeFeature].image}
                                alt={features[activeFeature].title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <Typography variant="h4" className="text-white mb-2">
                                    {features[activeFeature].title}
                                </Typography>
                                <Typography className="text-white/70">
                                    {features[activeFeature].description}
                                </Typography>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Grid container spacing={3}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} key={index}>
                                <motion.div
                                    className={`p-6 rounded-xl cursor-pointer transition-all ${
                                        activeFeature === index 
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
                                                            className="px-3 py-1 rounded-full bg-[#0D95F9]/20 text-[#0D95F9] text-sm"
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
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};