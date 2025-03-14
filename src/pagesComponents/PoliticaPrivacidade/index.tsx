"use client";

import { useState, useEffect } from "react";
import { Container, Stack } from "@mui/material";
import { SectionPolicy } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from "./components/Header";
import { QuickNavigation } from "./components/QuickNavigation";
import { PrivacyContent } from "./components/PrivacyContent";
import { ScrollToTop } from "./components/ScrollToTop";
import { useScroll } from "./hooks/useScroll";
import { CONFIG } from './constants/config';

export const PrivacyPolicy = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { showScrollTop, scrollToTop, scrollToSection } = useScroll();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, CONFIG.LOADING_DELAY);

        return () => clearTimeout(timer);
    }, []);

    return (
        <PageTransition>
            <ErrorBoundary>
                <SectionPolicy>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/BACKGROUND-DEFAULT.jpg"
                            alt="Privacy Policy Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="opacity">
                        <div className="section-privacy">
                            <Container maxWidth="lg" className="py-16">
                                {isLoading ? (
                                    <Stack spacing={3} width="100%">
                                        <ContentSkeleton />
                                        <ContentSkeleton type="text" />
                                        <Stack spacing={2}>
                                            {Array(8).fill(0).map((_, index) => (
                                                <ContentSkeleton key={index} type="card" />
                                            ))}
                                        </Stack>
                                    </Stack>
                                ) : (
                                    <>
                                        <Header />
                                        <QuickNavigation onSectionClick={scrollToSection} isLoading={isLoading} />
                                        <PrivacyContent />
                                        <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
                                    </>
                                )}
                            </Container>
                        </div>
                    </div>
                </SectionPolicy>
            </ErrorBoundary>
        </PageTransition>
    );
};