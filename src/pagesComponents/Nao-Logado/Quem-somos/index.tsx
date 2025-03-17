"use client";

import { Stack } from "@mui/material";
import { useState, lazy } from 'react';
import { SectionTeam } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ProgressiveLoad } from "@/components/ProgressiveLoad";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

const Header = lazy(() => import('./components/Header').then(mod => ({ default: mod.Header })));
const HistoriaSection = lazy(() => import('./components/HistoriaSection').then(mod => ({ default: mod.HistoriaSection })));
const MissaoSection = lazy(() => import('./components/MissaoSection').then(mod => ({ default: mod.MissaoSection })));
const ValoresSection = lazy(() => import('./components/ValoresSection').then(mod => ({ default: mod.ValoresSection })));
const EquipeSection = lazy(() => import('./components/EquipeSection').then(mod => ({ default: mod.EquipeSection })));
const CompromissoSection = lazy(() => import('./components/CompromissoSection').then(mod => ({ default: mod.CompromissoSection })));

export default function AboutPage() {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
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
                                    <SuspenseWrapper>
                                        <Header isLoading={!imageLoaded} />
                                    </SuspenseWrapper>

                                    <SuspenseWrapper>
                                        <HistoriaSection isLoading={!imageLoaded} />
                                    </SuspenseWrapper>

                                    <ProgressiveLoad>
                                        <SuspenseWrapper>
                                            <MissaoSection isLoading={!imageLoaded} />
                                        </SuspenseWrapper>
                                    </ProgressiveLoad>

                                    <ProgressiveLoad>
                                        <SuspenseWrapper>
                                            <ValoresSection isLoading={!imageLoaded} />
                                        </SuspenseWrapper>
                                    </ProgressiveLoad>

                                    <ProgressiveLoad rootMargin="100px">
                                        <SuspenseWrapper>
                                            <EquipeSection isLoading={!imageLoaded} />
                                        </SuspenseWrapper>
                                    </ProgressiveLoad>

                                    <ProgressiveLoad rootMargin="100px">
                                        <SuspenseWrapper>
                                            <CompromissoSection isLoading={!imageLoaded} />
                                        </SuspenseWrapper>
                                    </ProgressiveLoad>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </SectionTeam>
            </ErrorBoundary>
        </PageTransition>
    );
}