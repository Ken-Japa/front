"use client";

import { Container, Stack } from "@mui/material";
import { SectionSolutions } from "./styled";
import { useState, useEffect } from 'react';
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from "./components/Header";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTASection } from "./components/CTASection";
import { Newsletter } from "../Home/Newsletter";
import { LoadingSkeleton } from "./components/LoadingSkeleton";

export const Solutions = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <PageTransition>
            <ErrorBoundary>
                <SectionSolutions>
                    <Container maxWidth="xl" className="py-16">
                        {isLoading ? (
                            <LoadingSkeleton />
                        ) : (
                            <Stack spacing={8} alignItems="center">
                                <Header />
                                <FeaturesGrid
                                    hoveredCard={hoveredCard}
                                    setHoveredCard={setHoveredCard}
                                />
                                <TestimonialsSection />
                                <CTASection />
                                <Newsletter />
                            </Stack>
                        )}
                    </Container>
                </SectionSolutions>
            </ErrorBoundary>
        </PageTransition>
    );
};