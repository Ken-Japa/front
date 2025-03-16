"use client";

import { useState } from "react";
import { Container } from "@mui/material";
import { SectionPolicy } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from "./components/Header/";
import { QuickNavigation } from "./components/QuickNavigation/";
import { PrivacyContent } from "./components/PrivacyContent/PrivacyContent";
import { ScrollToTop } from "./components/ScrollToTop/";
import { useScroll } from "./hooks/useScroll";

export const PrivacyPolicy = () => {
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
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                filter: !imageLoaded ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.5s ease-in-out'
                            }}
                        />
                    </div>
                    <div className="opacity">
                        <div className="section-privacy">
                            <Container maxWidth="lg">
                                <>
                                    <Header isLoading={!imageLoaded} />
                                    <QuickNavigation onSectionClick={scrollToSection} isLoading={!imageLoaded} />
                                    <PrivacyContent isLoading={!imageLoaded} />
                                    <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
                                </>
                            </Container>
                        </div>
                    </div>
                </SectionPolicy>
            </ErrorBoundary>
        </PageTransition>
    );
};