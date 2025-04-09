"use client";

import { type FC, useState, lazy } from 'react';
import { Container } from "@mui/material";

import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { OptimizedImage } from "@/components/OptimizedImage";
import { ProgressiveLoad } from "@/components/ProgressiveLoad";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

import { SectionTermsServices } from "./styled";
import { ScrollToTop } from "./components/ScrollToTop";
import { useScroll } from "./hooks/useScroll";

const IMAGE_PROPS = {
    src: "/assets/images/background/BACKGROUND-DEFAULT.jpg",
    alt: "Imagem de Fundo dos Termos de Serviço",
    fill: true,
    priority: true,
    sizes: "100vw",
    className: "object-cover",
    loadingClassName: "scale-100 blur-xl grayscale",
    quality: 85
} as const;

const Header = lazy(() => import('./components/Header').then(mod => ({ default: mod.Header })));
const QuickNavigation = lazy(() => import('./components/QuickNavigation').then(mod => ({ default: mod.QuickNavigation })));
const TermsContent = lazy(() => import('./components/TermsContent').then(mod => ({ default: mod.TermsContent })));

export const TermsServices: FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const { showScrollTop, scrollToTop, scrollToSection } = useScroll();

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <SectionTermsServices>
                    <div className="background-image">
                        <OptimizedImage
                            {...IMAGE_PROPS}
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                filter: !imageLoaded ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.5s ease-in-out'
                            }}
                        />
                    </div>
                    <div className="opacity-layer">
                        <Container maxWidth="lg" className="content-wrapper">
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
                                    <TermsContent isLoading={!imageLoaded} />
                                </SuspenseWrapper>
                            </ProgressiveLoad>
                        </Container>
                    </div>
                    <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
                </SectionTermsServices>
            </ErrorBoundary>
        </PageTransition>
    );
};