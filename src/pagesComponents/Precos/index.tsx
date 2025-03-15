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

export const Pricing = () => {
    return (
        <PageTransition>
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
                        />
                    </div>
                    <div className="opacity">
                        <VantagensSection />
                        <RecursosSection />
                        <PlanosSection />
                        <EmbaixadorSection />
                        <TestimonialsSection />
                        <FAQSection />
                    </div>
                </SectionPricing>
            </ErrorBoundary>
        </PageTransition>
    );
};