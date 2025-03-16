"use client";

import { Stack } from "@mui/material";
import { useState } from 'react';
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

export default function AboutPage() {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <PageTransition
            direction="up"
            duration={0.4}
            distance={30}
            className="w-full"
        >
            <ErrorBoundary>
                <SectionTeam>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/Quem-Somos.jpg"
                            alt="About Us Background"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                            loadingClassName="scale-100 blur-xl grayscale"
                            quality={85}
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                filter: !imageLoaded ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.5s ease-in-out'
                            }}
                        />
                    </div>
                    <div className="opacity" />
                    <div className="content">
                        <div className="opacity" />
                        <div className="content">
                            <div className="container mx-auto px-4 py-16 relative z-10">
                                <Stack spacing={8} alignItems="center">
                                    <Header isLoading={!imageLoaded} />
                                    <HistoriaSection isLoading={!imageLoaded} />
                                    <MissaoSection isLoading={!imageLoaded} />
                                    <ValoresSection isLoading={!imageLoaded} />
                                    <EquipeSection isLoading={!imageLoaded} />
                                    <CompromissoSection isLoading={!imageLoaded} />
                                </Stack>
                            </div>
                        </div>
                    </div>
                </SectionTeam>
            </ErrorBoundary>
        </PageTransition>
    );
}