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
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { useRef } from 'react';

export const Solutions = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3;
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <PageTransition>
            <ErrorBoundary>
                <SectionSolutions>
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="video-background"
                    >
                        <source src="/assets/video/Recursos.mp4" type="video/mp4" />
                    </video>
                    <div className="overlay" />

                    <Container maxWidth="xl">
                        <ContentWrapper>
                            {isLoading ? (
                                <LoadingSkeleton />
                            ) : (
                                <>
                                    <Header />
                                    <FeaturesGrid
                                        hoveredCard={hoveredCard}
                                        setHoveredCard={setHoveredCard}
                                    />
                                    <TestimonialsSection />
                                    <CTASection />
                                    <Newsletter />
                                </>
                            )}
                        </ContentWrapper>
                    </Container>
                </SectionSolutions>
            </ErrorBoundary>
        </PageTransition>
    );
};