"use client";

import { Plans } from "./Plans";
import { Questions } from "./Questions";
import { Welcome } from "./Welcome";
import { Newsletter } from "./Newsletter";
import { Stack, Container, Divider, Typography } from "@mui/material";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Features } from "./Features";
import { useState, useEffect } from 'react';
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { LoadingSkeleton } from "./LoadingSkeleton";
import { MainContainer, Section, SectionTitle, SectionSubtitle } from "./styled";

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
            <PageTransition
                direction="up"
                duration={0.4}
                distance={30}
                className="w-full"
            >
                <ErrorBoundary>
                    <LoadingSkeleton />
                </ErrorBoundary>
            </PageTransition>
        );
    }

    return (
        <PageTransition
            direction="up"
            duration={0.4}
            distance={30}
            className="w-full"
        >
            <ErrorBoundary>
                <MainContainer>
                    <Section>
                        <Welcome />
                    </Section>

                    <Section withPadding>
                        <Features />
                    </Section>

                    <Newsletter />


                    <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />

                    <Section withPadding>
                        <Container maxWidth="xl">
                            <Stack spacing={6} alignItems="center">
                                <Stack spacing={4} alignItems="center">
                                    <SectionTitle>
                                        Escolha o Plano Ideal
                                    </SectionTitle>
                                    <SectionSubtitle>
                                        Invista no seu futuro – Não pague por ferramentas ultrapassadas.
                                        <br /> <br />
                                        Escolha a opção que melhor atende às suas necessidades.
                                    </SectionSubtitle>
                                </Stack>
                                <Plans />
                            </Stack>
                        </Container>
                    </Section>

                    <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />

                    <Section withPadding>
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
                    </Section>
                </MainContainer>
            </ErrorBoundary>
        </PageTransition>
    );
};