"use client";

import { type FC, useState, lazy } from "react";

import { ErrorBoundary } from "@/components/Feedback/ErrorBoundary";
import { OptimizedImage } from "@/components/Utils/OptimizedImage";

import { ambassadors } from './constants/ambassadors';
import { EmbaixadoresSection, StyledPageTransition, BackgroundImage } from './styled';

const Header = lazy(() => import('./components/Header').then(mod => ({ default: mod.Header })));
const CallToAction = lazy(() => import('./components/CallToAction').then(mod => ({ default: mod.CallToAction })));
const MainContent = lazy(() => import('./components/MainContent').then(mod => ({ default: mod.MainContent })));

const IMAGE_PROPS = {
    src: "/assets/images/background/Embaixadores.jpg",
    alt: "Fundo da página de Embaixadores",
    fill: true,
    priority: true,
    sizes: "100vw",
    className: "object-cover",
    loadingClassName: "scale-100 blur-sm grayscale-0",
    quality: 85

} as const;

export const Embaixadores: FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <StyledPageTransition direction="up" duration={0.4} distance={30}>
            <ErrorBoundary>
                <EmbaixadoresSection>
                    <div className="background-container">
                        <BackgroundImage isLoaded={imageLoaded}>
                            <OptimizedImage
                                {...IMAGE_PROPS}
                                onLoad={() => setImageLoaded(true)}
                            />
                        </BackgroundImage>
                        <div className="overlay" />
                    </div>
                    <MainContent
                        isLoading={!imageLoaded}
                        ambassadors={ambassadors}
                        Header={Header}
                        CallToAction={CallToAction}
                    />
                </EmbaixadoresSection>
            </ErrorBoundary>
        </StyledPageTransition>
    );
};

export default Embaixadores;