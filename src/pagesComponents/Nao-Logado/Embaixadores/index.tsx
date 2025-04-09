"use client";

import { type FC, useState, lazy } from "react";

import { PageTransition } from "@/components/Utils/PageTransition";
import { ErrorBoundary } from "@/components/Feedback/ErrorBoundary";
import { OptimizedImage } from "@/components/Utils/OptimizedImage";

import { ambassadors } from './constants/ambassadors';
import { EmbaixadoresSection } from './styled';

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
    loadingClassName: "scale-100 blur-sm grayscale",
    quality: 85
} as const;

export const Embaixadores: FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <EmbaixadoresSection>
                    <div className="background-container">
                        <OptimizedImage
                            {...IMAGE_PROPS}
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                filter: !imageLoaded ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.5s ease-in-out'
                            }}
                        />
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
        </PageTransition>
    );
};

export default Embaixadores;