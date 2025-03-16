"use client";

import { SectionPricing } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { VantagensSection } from "./components/VantagensSection";
import { RecursosSection } from "./components/RecursosSection";
import { PlanosSection } from "./components/PlanosSection";
import { EmbaixadorSection } from "./components/EmbaixadorSection/";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection/";
import { useState } from "react";
import { LoadingSkeleton } from "./components/LoadingSkeleton";

export const Pricing = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <PageTransition
            direction="up"
            duration={0.4}
            distance={30}
            className="w-full"
        >
            <ErrorBoundary>
                <SectionPricing>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/Precos.jpg"
                            alt="Pricing Background"
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
                        {!imageLoaded ? (
                            <LoadingSkeleton />
                        ) : (
                            <>
                                <VantagensSection />
                                <RecursosSection />
                                <PlanosSection />
                                <EmbaixadorSection />
                                <TestimonialsSection />
                                <FAQSection />
                            </>
                        )}
                    </div>
                </SectionPricing>
            </ErrorBoundary>
        </PageTransition>
    );
};