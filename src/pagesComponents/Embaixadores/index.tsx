"use client";

import { Container, Box, Stack } from "@mui/material";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ambassadors } from './constants/ambassadors';
import { Header } from "./components/Header";
import { AmbassadorCard } from "./components/AmbassadorCard";
import { CallToAction } from "./components/CallToAction";
import { OptimizedImage } from "@/components/OptimizedImage";

export default function Ambassadors() {
    return (
        <PageTransition>
            <ErrorBoundary>
                <main className="min-h-screen relative">
                    <div className="absolute inset-0 w-full h-full">
                        <OptimizedImage
                            src="/assets/images/background/Embaixadores.jpg"
                            alt="Ambassadors Background"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                    </div>

                    <div className="relative z-10 py-32">
                        <Container maxWidth="lg">
                            <Stack spacing={8} alignItems="center">
                                <Header />

                                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                                    {ambassadors.map((ambassador, index) => (
                                        <AmbassadorCard
                                            key={index}
                                            {...ambassador}
                                            index={index}
                                        />
                                    ))}
                                </Box>

                                <CallToAction />
                            </Stack>
                        </Container>
                    </div>
                </main>
            </ErrorBoundary>
        </PageTransition>
    );
}