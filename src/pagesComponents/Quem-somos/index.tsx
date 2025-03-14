"use client";

import { Stack } from "@mui/material";
import { useState, useEffect } from 'react';
import { SectionTeam } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from "./components/Header";
import { HistoriaSection } from "./components/HistoriaSection";
import { MissaoSection } from "./components/MissaoSection";
import { ValoresSection } from "./components/ValoresSection";
import { EquipeSection } from "./components/EquipeSection";
import { CompromissoSection } from "./components/CompromissoSection/";
import { LoadingSkeleton } from "./components/LoadingSkeleton";

export default function AboutPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <PageTransition>
            <ErrorBoundary>
                <SectionTeam>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/Quem-Somos.jpg"
                            alt="About Us Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="opacity" />
                    {isLoading ? (
                        <LoadingSkeleton />
                    ) : (
                        <div className="content">
                            <div className="opacity" />
                            <div className="content">
                                <div className="container mx-auto px-4 py-16 relative z-10">
                                    <Stack spacing={8} alignItems="center">
                                        <Header />
                                        <HistoriaSection />
                                        <MissaoSection />
                                        <ValoresSection />
                                        <EquipeSection />
                                        <CompromissoSection />
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    )}
                </SectionTeam>
            </ErrorBoundary>
        </PageTransition>
    );
}