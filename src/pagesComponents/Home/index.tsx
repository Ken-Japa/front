"use client";

import { useState } from "react";
import { Plans } from "./Plans";
import { Questions } from "./Questions";
import { Welcome } from "./Welcome";
import { Newsletter } from "./Newsletter";
import { Stack, Container, Divider, Typography } from "@mui/material";
import Link from 'next/link';
import { Features } from "./Features";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MainContainer, Section, SectionTitle, SectionSubtitle } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";

export const Home = () => {
    const [imageLoaded, setImageLoaded] = useState(false);


    return (
        <PageTransition
            direction="up"
            duration={0.4}
            distance={30}
            className="w-full"
        >
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
                        <Welcome
                            isLoading={!imageLoaded}
                        />
                    </Section>

                    <Section withPadding>
                        <Features isLoading={!imageLoaded} />
                    </Section>

                    <Newsletter isLoading={!imageLoaded} />

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
                                <Plans isLoading={!imageLoaded} />
                            </Stack>
                        </Container>
                    </Section>

                    <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />

                    <Section withPadding>
                        <Container maxWidth="xl">
                            <Questions isLoading={!imageLoaded} />
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