"use client";

import { useState, lazy } from "react";
import { Stack, Container, Divider, Typography } from "@mui/material";
import Link from 'next/link';
import { Welcome } from "./Welcome";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MainContainer, Section, SectionTitle, SectionSubtitle } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ProgressiveLoad } from "@/components/ProgressiveLoad";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

const Plans = lazy(() => import('./Plans').then(mod => ({ default: mod.Plans })));
const Questions = lazy(() => import('./Questions').then(mod => ({ default: mod.Questions })));
const Newsletter = lazy(() => import('./Newsletter').then(mod => ({ default: mod.Newsletter })));
const Features = lazy(() => import('./Features').then(mod => ({ default: mod.Features })));

export const Home = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <MainContainer>
                    <Section className="relative min-h-screen">
                        <div className="absolute inset-0 w-full h-full">
                            <OptimizedImage
                                src="/assets/images/background/HOME.jpg"
                                alt="Home Background"
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover"
                                loadingClassName="scale-100 blur-xl grayscale opacity-50"
                                quality={90}
                                onLoad={() => setImageLoaded(true)}
                                style={{
                                    filter: !imageLoaded ? 'grayscale(1)' : 'none',
                                    transition: 'filter 0.5s ease-in-out'
                                }}
                            />
                            <div className="absolute inset-0 bg-black/50" />
                        </div>
                        <Welcome isLoading={!imageLoaded} />
                    </Section>

                    <ProgressiveLoad>
                        <Section withPadding>
                            <SuspenseWrapper>
                                <Features isLoading={!imageLoaded} />
                            </SuspenseWrapper>
                        </Section>
                    </ProgressiveLoad>

                    <ProgressiveLoad>
                        <SuspenseWrapper>
                            <Newsletter isLoading={!imageLoaded} />
                        </SuspenseWrapper>
                    </ProgressiveLoad>

                    <ProgressiveLoad>
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
                                    <SuspenseWrapper>
                                        <Plans isLoading={!imageLoaded} />
                                    </SuspenseWrapper>
                                </Stack>
                            </Container>
                        </Section>
                    </ProgressiveLoad>

                    <ProgressiveLoad>
                        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />
                        <Section withPadding>
                            <Container maxWidth="xl">
                                <SuspenseWrapper>
                                    <Questions isLoading={!imageLoaded} />
                                </SuspenseWrapper>
                                <Stack alignItems="center" sx={{ mt: 4 }}>
                                    <Typography variant="body1" className="text-white/90 hover:text-white transition-colors">
                                        Encontre mais respostas acessando o{' '}
                                        <Link href="/faq" className="text-[#0D95F9] hover:text-[#0D95F9]/95 underline">
                                            FAQ
                                        </Link>
                                        .
                                    </Typography>
                                </Stack>
                            </Container>
                        </Section>
                    </ProgressiveLoad>
                </MainContainer>
            </ErrorBoundary>
        </PageTransition>
    );
};