"use client";

import { Container } from "@mui/material";
import { SectionTermsServices } from "./styled";
import { useState, useEffect } from 'react';
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from "./components/Header";
import { QuickNavigation } from "./components/QuickNavigation";
import { TermsContent } from "./components/TermsContent";
import { ScrollToTop } from "./components/ScrollToTop";
import { LoadingSkeleton } from "./components/LoadingSkeleton";

export const TermsServices = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    };

    return (
        <PageTransition>
            <ErrorBoundary>
                <SectionTermsServices>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/BACKGROUND-DEFAULT.jpg"
                            alt="Terms of Service Background"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                            loadingClassName="scale-100 blur-xl grayscale"
                            quality={85}
                        />
                    </div>
                    <div className="opacity-layer">
                        <Container maxWidth="lg" className="content-wrapper">
                            {isLoading ? (
                                <LoadingSkeleton />
                            ) : (
                                <>
                                    <Header />
                                    <QuickNavigation onSectionClick={scrollToSection} />
                                    <TermsContent />
                                    <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
                                </>
                            )}
                        </Container>
                    </div>
                </SectionTermsServices>
            </ErrorBoundary>
        </PageTransition>
    );
};