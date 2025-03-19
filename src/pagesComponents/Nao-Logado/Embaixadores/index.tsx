"use client";

import { type FC, useState, lazy } from "react";

import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { OptimizedImage } from "@/components/OptimizedImage";

import { ambassadors } from './constants/ambassadors';
import { MainContent } from './components/MainContent';

const Header = lazy(() => import('./components/Header').then(mod => ({ default: mod.Header })));
const CallToAction = lazy(() => import('./components/CallToAction').then(mod => ({ default: mod.CallToAction })));

const IMAGE_PROPS = {
    src: "/assets/images/background/Embaixadores.jpg",
    alt: "Ambassadors Background",
    fill: true,
    priority: true,
    sizes: "100vw",
    className: "object-cover",
    loadingClassName: "scale-100 blur-sm grayscale",
    quality: 85
} as const;

const Ambassadors: FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <main className="min-h-screen relative">
                    <div className="absolute inset-0 w-full h-full">
                        <OptimizedImage
                            {...IMAGE_PROPS}
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                filter: !imageLoaded ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.5s ease-in-out'
                            }}
                        />
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                    </div>
                    <MainContent
                        isLoading={!imageLoaded}
                        ambassadors={ambassadors}
                        Header={Header}
                        CallToAction={CallToAction}
                    />
                </main>
            </ErrorBoundary>
        </PageTransition>
    );
};

export default Ambassadors;