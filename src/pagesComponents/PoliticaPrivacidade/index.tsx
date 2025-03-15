"use client";

import { useState, useEffect } from "react";
import { Container, Stack } from "@mui/material";
import { SectionPolicy } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from "./components/Header/";
import { QuickNavigation } from "./components/QuickNavigation/";
import { PrivacyContent } from "./components/PrivacyContent";
import { ScrollToTop } from "./components/ScrollToTop/";
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
        <PageTransition
            direction="up"
            duration={0.4}
            distance={30}
            className="w-full"
        >
            <ErrorBoundary>
                <SectionPolicy>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/BACKGROUND-DEFAULT.jpg"
                            alt="Privacy Policy Background"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                            loadingClassName="scale-100 blur-xl grayscale"
                            quality={85}
                        />
                    </div>
                    <div className="opacity">
                        <div className="section-privacy">
                            <Container maxWidth="lg">
                                {isLoading ? (
                                    <LoadingSkeleton />
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