"use client";

import { Container } from "@mui/material";
import { SectionSolutions, ContentWrapper } from "./styled";
import { useState, useEffect } from 'react';
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from "./components/Header";
import { FeaturesGrid } from "./components/FeaturesGrid/";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTASection } from "./components/CTASection";
import { Newsletter } from "../Home/Newsletter";
import { useRef } from 'react';

export const Solutions = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            videoElement.playbackRate = 0.3;

            const handleVideoLoad = () => {
                setVideoLoaded(true);
                videoElement.removeEventListener('canplay', handleVideoLoad);
            };
            videoElement.addEventListener('canplay', handleVideoLoad);

            if (videoElement.readyState >= 3) {
                handleVideoLoad();
            }

            return () => {
                videoElement.removeEventListener('canplay', handleVideoLoad);
            };
        }
    }, []);

    return (
        <PageTransition
            direction="up"
            duration={0.4}
            distance={30}
            className="w-full"
        >
            <ErrorBoundary>
                <SectionSolutions>
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata" // Alterar para metadata para carregamento inicial mais rápido
                        className="video-background"
                    >
                        <source src="/assets/video/Recursos.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay" />

                    <Container maxWidth="xl">
                        <ContentWrapper>
                            <>
                                <Header isLoading={!videoLoaded} />
                                <FeaturesGrid
                                    hoveredCard={hoveredCard}
                                    setHoveredCard={setHoveredCard}
                                    isLoading={!videoLoaded}
                                />
                                <TestimonialsSection isLoading={!videoLoaded} />
                                <CTASection isLoading={!videoLoaded} />
                                <Newsletter isLoading={!videoLoaded} />
                            </>
                        </ContentWrapper>
                    </Container>
                </SectionSolutions>
            </ErrorBoundary>
        </PageTransition>
    );
};