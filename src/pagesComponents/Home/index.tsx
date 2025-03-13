"use client";

import { Plans } from "./Plans";
import { Questions } from "./Questions";
import { Welcome } from "./Welcome";
import { Stack, Container, Divider, Typography } from "@mui/material";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Features } from "./Features";


interface Props {
    showAnimation: boolean;
}

export const Home = ({ showAnimation }: Props) => {
    const [welcomeRef, welcomeInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [solutionsRef, solutionsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [plansRef, plansInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [questionsRef, questionsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <main className="bg-gradient-to-b from-black to-[#001529]">
            <motion.section
                ref={welcomeRef}
                initial={{ opacity: 0 }}
                animate={welcomeInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="min-h-screen flex items-center"
            >
                <Container maxWidth="xl">
                    <Welcome />
                </Container>
            </motion.section>

            <motion.section
                ref={solutionsRef}
                initial={{ opacity: 0, y: 50 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="py-20"
            >
                <Features />
            </motion.section>

            <motion.section
                ref={plansRef}
                initial={{ opacity: 0, y: 50 }}
                animate={plansInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="py-20"
            >
                <Container maxWidth="xl" sx={{ mb: 4 }}>
                    <Stack spacing={4} alignItems="center">
                        <h2 className="text-4xl font-bold text-white text-center">
                            Escolha o Plano Ideal
                        </h2>
                        <p className="text-white/70 text-center max-w-2xl">
                            Invista em seu sucesso com nossos planos personalizados.
                            Escolha a opção que melhor atende às suas necessidades.
                        </p>
                    </Stack>
                </Container>
                <Plans />
            </motion.section>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />

            <motion.section
                ref={questionsRef}
                initial={{ opacity: 0, y: 50 }}
                animate={questionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="py-20"
            >
                <Container maxWidth="xl">
                    <Questions />
                    <Stack alignItems="center" sx={{ mt: 4 }}>
                        <Typography
                            variant="body1"
                            className="text-white/70 hover:text-white/90 transition-colors"
                        >
                            Encontre mais respostas acessando o{' '}
                            <Link
                                href="/faq"
                                className="text-[#0D95F9] hover:text-[#0D95F9]/80 underline"
                            >
                                FAQ
                            </Link>
                            .
                        </Typography>
                    </Stack>
                </Container>
            </motion.section>
        </main>
    );
};