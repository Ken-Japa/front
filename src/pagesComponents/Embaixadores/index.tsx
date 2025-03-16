"use client";

import { useState, lazy } from "react";
import { Container, Box, Stack } from "@mui/material";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ambassadors } from './constants/ambassadors';
import { OptimizedImage } from "@/components/OptimizedImage";
import { ProgressiveLoad } from "@/components/ProgressiveLoad";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

const Header = lazy(() => import('./components/Header').then(mod => ({ default: mod.Header })));
const AmbassadorCard = lazy(() => import('./components/AmbassadorCard').then(mod => ({ default: mod.AmbassadorCard })));
const CallToAction = lazy(() => import('./components/CallToAction').then(mod => ({ default: mod.CallToAction })));

export default function Ambassadors() {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <main className="min-h-screen relative">
                    <div className="absolute inset-0 w-full h-full">
                        <OptimizedImage
                            src="/assets/images/background/Embaixadores.jpg"
                            alt="Ambassadors Background"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                            loadingClassName="scale-100 blur-sm grayscale"
                            quality={85}
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                filter: !imageLoaded ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.5s ease-in-out'
                            }}
                        />
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                    </div>

                    <div className="relative z-10 py-32">
                        <Container maxWidth="lg">
                            <Stack spacing={8} alignItems="center">
                                <SuspenseWrapper>
                                    <Header isLoading={!imageLoaded} />
                                </SuspenseWrapper>

                                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                                    {ambassadors.map((ambassador, index) => (
                                        <ProgressiveLoad key={index} rootMargin="100px">
                                            <SuspenseWrapper>
                                                <AmbassadorCard
                                                    {...ambassador}
                                                    index={index}
                                                    isLoading={!imageLoaded}
                                                />
                                            </SuspenseWrapper>
                                        </ProgressiveLoad>
                                    ))}
                                </Box>

                                <ProgressiveLoad>
                                    <SuspenseWrapper>
                                        <CallToAction isLoading={!imageLoaded} />
                                    </SuspenseWrapper>
                                </ProgressiveLoad>
                            </Stack>
                        </Container>
                    </div>
                </main>
            </ErrorBoundary>
        </PageTransition>
    );
}