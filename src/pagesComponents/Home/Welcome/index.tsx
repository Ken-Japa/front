"use client";
import { CustomButton } from "@/components/Custom/Button";
import { SectionWelcome } from "./styled";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useEffect, useState } from "react";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { motion } from "framer-motion";
import { Stack, Grid, Typography, Container } from "@mui/material";
import { OptimizedImage } from "@/components/OptimizedImage";

export const Welcome = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const hasAnimationPlayed = localStorage.getItem('matrixAnimationPlayed');
        if (!hasAnimationPlayed) {
            setShowAnimation(true);
            localStorage.setItem('matrixAnimationPlayed', 'true');
        }
    }, []);

    const highlights = [
        {
            icon: <ShowChartIcon sx={{ fontSize: 40, color: "#0D95F9" }} />,
            title: "ativos monitorados",
            value: "+1000",
            description: "dados atualizados"
        },
        {
            icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#0D95F9" }} />,
            title: "Precisão na operação",
            value: "%",
            description: "acurácia em análises"
        },
        {
            icon: <CardGiftcardIcon sx={{ fontSize: 40, color: "#0D95F9" }} />,
            title: "Comunidade",
            value: "∞",
            description: "investidores e analistas ativos"
        }
    ];

    return (
        <SectionWelcome>
            <div className="background-image">
                <OptimizedImage
                    src="/assets/images/background/HOME.jpg"
                    alt="Welcome Background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="home">
                {/* Rest of your content */}
                <div className="welcome mb-20">
                    <div className="title-left">
                        <MatrixRainText
                            text="Seja bem vindo a"
                            className="text-white"
                        />
                    </div>
                    <div className="title-right">
                        <MatrixRainText
                            text="Auge Invest"
                            className="text-white font-bold text-5xl"
                        />
                    </div>
                </div>

                <Container maxWidth="xl">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Stack spacing={4}>


                                <Typography variant="h5" className="text-white/80">
                                    Transforme seus investimentos com inteligência e análise avançada
                                </Typography>

                                <Typography variant="body1" className="text-white/60">
                                    Junte-se aos melhores investidores que estão utilizando a mais avançada
                                    plataforma de análise do mercado financeiro brasileiro.
                                </Typography>

                                <Stack direction="row" spacing={2} justifyContent="flex-end">
                                    <CustomButton
                                        value="Teste grátis por 21 dias"
                                        Icon={CardGiftcardIcon}
                                        color="primary"
                                    />
                                    <CustomButton
                                        value="Ver demonstração"
                                        color="info"
                                    />
                                </Stack>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Grid container spacing={3}>
                                {highlights.map((item, index) => (
                                    <Grid item xs={12} md={4} key={index}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.2 }}
                                            className="bg-[#ffffff08] p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-[#0D95F9]/30 transition-all"
                                        >
                                            <Stack spacing={2} alignItems="center" textAlign="center">
                                                {item.icon}
                                                <Typography variant="h3" className="text-[#0D95F9] font-bold">
                                                    {item.value}
                                                </Typography>
                                                <Typography variant="subtitle1" className="text-white">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" className="text-white/60">
                                                    {item.description}
                                                </Typography>
                                            </Stack>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </SectionWelcome>
    );
};