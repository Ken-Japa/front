"use client";

import { Container } from "@mui/material";
import { SectionTermsServices } from "./styled";
import { useState } from 'react';
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from "./components/Header";
import { QuickNavigation } from "./components/QuickNavigation";
import { TermsContent } from "./components/TermsContent";
import { ScrollToTop } from "./components/ScrollToTop";
import { useScroll } from "./hooks/useScroll";
import { ProgressiveLoad } from "@/components/ProgressiveLoad";

export const TermsServices = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const { showScrollTop, scrollToTop, scrollToSection } = useScroll();

    return (
        <PageTransition
            direction="up"
            duration={0.4}
            distance={30}
            className="w-full"
        >
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
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                filter: !imageLoaded ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.5s ease-in-out'
                            }}
                        />
                    </div>
                    <div className="opacity-layer">
                        <Container maxWidth="lg" className="content-wrapper">
                            <>
                                <Header isLoading={!imageLoaded} />
                                <QuickNavigation
                                    onSectionClick={scrollToSection}
                                    isLoading={!imageLoaded}
                                />

                                <ProgressiveLoad rootMargin="100px">
                                    <TermsContent isLoading={!imageLoaded} />
                                </ProgressiveLoad>
                            </>
                        </Container>
                    </div>
                    <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
                </SectionTermsServices>
            </ErrorBoundary>
        </PageTransition>
    );
};