"use client";

import { useState, lazy } from "react";
import { Container } from "@mui/material";
import { SectionPolicy } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { useScroll } from "./hooks/useScroll";
import { ProgressiveLoad } from "@/components/ProgressiveLoad";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

const Header = lazy(() => import('./components/Header').then(mod => ({ default: mod.Header })));
const QuickNavigation = lazy(() => import('./components/QuickNavigation').then(mod => ({ default: mod.QuickNavigation })));
const PrivacyContent = lazy(() => import('./components/PrivacyContent/PrivacyContent').then(mod => ({ default: mod.PrivacyContent })));
const ScrollToTop = lazy(() => import('./components/ScrollToTop').then(mod => ({ default: mod.ScrollToTop })));

export const PrivacyPolicy = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const { showScrollTop, scrollToTop, scrollToSection } = useScroll();

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
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
                                    <SuspenseWrapper>
                                        <Header isLoading={!imageLoaded} />
                                    </SuspenseWrapper>

                                    <SuspenseWrapper>
                                        <QuickNavigation 
                                            onSectionClick={scrollToSection} 
                                            isLoading={!imageLoaded} 
                                        />
                                    </SuspenseWrapper>

                                    <ProgressiveLoad rootMargin="100px">
                                        <SuspenseWrapper>
                                            <PrivacyContent isLoading={!imageLoaded} />
                                        </SuspenseWrapper>
                                    </ProgressiveLoad>

                                    <SuspenseWrapper>
                                        <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
                                    </SuspenseWrapper>
                                </>
                            </Container>
                        </div>
                    </div>
                </SectionPolicy>
            </ErrorBoundary>
        </PageTransition>
    );
};