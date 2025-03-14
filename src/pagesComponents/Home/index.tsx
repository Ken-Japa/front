"use client";

import { Plans } from "./Plans";
import { Questions } from "./Questions";
import { Welcome } from "./Welcome";
import { Stack, Container, Divider, Typography } from "@mui/material";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Features } from "./Features";
import { useState, useEffect } from 'react';
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';



export const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
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
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <PageTransition>
                <ErrorBoundary>
                    <main className="bg-gradient-to-b from-black to-[#001529]">
                        <Container maxWidth="xl">
                            {/* Welcome Section Skeleton */}
                            <section className="min-h-screen flex items-center">
                                <Stack spacing={4} width="100%">
                                    <ContentSkeleton />
                                    <ContentSkeleton />
                                    <Stack direction="row" spacing={2}>
                                        <ContentSkeleton />
                                        <ContentSkeleton />
                                    </Stack>
                                </Stack>
                            </section>

                            {/* Features Section Skeleton */}
                            <section className="py-20">
                                <Stack spacing={4} alignItems="center">
                                    <ContentSkeleton />
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                                        {Array(6).fill(0).map((_, index) => (
                                            <ContentSkeleton key={`feature-${index}`} type="card" />
                                        ))}
                                    </div>
                                </Stack>
                            </section>

                            {/* Plans Section Skeleton */}
                            <section className="py-20">
                                <Stack spacing={4} alignItems="center">
                                    <ContentSkeleton />
                                    <ContentSkeleton />
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                                        {Array(3).fill(0).map((_, index) => (
                                            <ContentSkeleton key={`plan-${index}`} type="card" />
                                        ))}
                                    </div>
                                </Stack>
                            </section>

                            {/* FAQ Section Skeleton */}
                            <section className="py-20">
                                <Stack spacing={4}>
                                    <ContentSkeleton />
                                    {Array(4).fill(0).map((_, index) => (
                                        <ContentSkeleton key={`faq-${index}`} type="card" />
                                    ))}
                                </Stack>
                            </section>
                        </Container>
                    </main>
                </ErrorBoundary>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <ErrorBoundary>
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
                                <p className="text-white/90 text-center max-w-2xl">
                                    Invista no seu futuro – Não pague por ferramentas ultrapassadas. <br /> <br />
                                    Escolha a opção que melhor atende às suas necessidades.
                                </p>
                            </Stack>
                        </Container>
                        <Plans />
                    </motion.section>

                    <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />

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
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    Encontre mais respostas acessando o{' '}
                                    <Link
                                        href="/faq"
                                        className="text-[#0D95F9] hover:text-[#0D95F9]/95 underline"
                                    >
                                        FAQ
                                    </Link>
                                    .
                                </Typography>
                            </Stack>
                        </Container>
                    </motion.section>
                </main>
            </ErrorBoundary>
        </PageTransition >
    );
};