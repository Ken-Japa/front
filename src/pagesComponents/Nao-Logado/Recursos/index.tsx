"use client";

import { type FC, useState, useEffect, useRef, lazy } from 'react';

import { Container } from "@mui/material";

import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ProgressiveLoad } from "@/components/ProgressiveLoad";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

import { SectionSolutions, ContentWrapper } from "./styled";

const Header = lazy(() => import('./components/Header').then(mod => ({ default: mod.Header })));
const FeaturesGrid = lazy(() => import('./components/FeaturesGrid').then(mod => ({ default: mod.FeaturesGrid })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })));
const CTASection = lazy(() => import('./components/CTASection').then(mod => ({ default: mod.CTASection })));
const Newsletter = lazy(() => import('../Home/Newsletter').then(mod => ({ default: mod.Newsletter })));

export const Solutions: FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            const handleVideoLoad = () => {
                videoElement.playbackRate = 0.4;
                setVideoLoaded(true);
            };

            const handleVideoError = (e: ErrorEvent) => {
                console.error('Video loading error:', e);
                videoElement.load();
            };
            videoElement.addEventListener('loadeddata', handleVideoLoad);
            videoElement.addEventListener('error', handleVideoError as EventListener);

            videoElement.load();

            return () => {
                videoElement.removeEventListener('loadeddata', handleVideoLoad);
                videoElement.removeEventListener('error', handleVideoError as EventListener);
            };
        }
    }, []);

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <SectionSolutions>
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="video-background"
                        crossOrigin="anonymous"
                    >
                        <source
                            src="/assets/video/Recursos.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay" />

                    <Container maxWidth="xl">
                        <ContentWrapper>
                            <>
                                <SuspenseWrapper>
                                    <Header isLoading={!videoLoaded} />
                                </SuspenseWrapper>

                                <ProgressiveLoad>
                                    <SuspenseWrapper>
                                        <FeaturesGrid
                                            hoveredCard={hoveredCard}
                                            setHoveredCard={setHoveredCard}
                                            isLoading={!videoLoaded}
                                        />
                                    </SuspenseWrapper>
                                </ProgressiveLoad>

                                <ProgressiveLoad rootMargin="100px">
                                    <SuspenseWrapper>
                                        <CTASection isLoading={!videoLoaded} />
                                    </SuspenseWrapper>
                                </ProgressiveLoad>

                                <ProgressiveLoad rootMargin="100px">
                                    <SuspenseWrapper>
                                        <TestimonialsSection isLoading={!videoLoaded} />
                                    </SuspenseWrapper>
                                </ProgressiveLoad>

                                <ProgressiveLoad rootMargin="150px">
                                    <SuspenseWrapper>
                                        <Newsletter isLoading={!videoLoaded} />
                                    </SuspenseWrapper>
                                </ProgressiveLoad>
                            </>
                        </ContentWrapper>
                    </Container>
                </SectionSolutions>
            </ErrorBoundary>
        </PageTransition>
    );
};