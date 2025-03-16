"use client";

import { useState } from "react";
import { Container, Box, Stack } from "@mui/material";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ambassadors } from './constants/ambassadors';
import { Header } from "./components/Header";
import { AmbassadorCard } from "./components/AmbassadorCard";
import { CallToAction } from "./components/CallToAction";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ProgressiveLoad } from "@/components/ProgressiveLoad";

export default function Ambassadors() {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <PageTransition
            direction="up"
            duration={0.4}
            distance={30}
            className="w-full"
        >
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
                                <Header isLoading={!imageLoaded} />

                                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                                    {ambassadors.map((ambassador, index) => (
                                        <ProgressiveLoad key={index} rootMargin="100px">
                                            <AmbassadorCard
                                                {...ambassador}
                                                index={index}
                                                isLoading={!imageLoaded}
                                            />
                                        </ProgressiveLoad>
                                    ))}
                                </Box>

                                <ProgressiveLoad>
                                    <CallToAction isLoading={!imageLoaded} />
                                </ProgressiveLoad>
                            </Stack>
                        </Container>
                    </div>
                </main>
            </ErrorBoundary>
        </PageTransition>
    );
}