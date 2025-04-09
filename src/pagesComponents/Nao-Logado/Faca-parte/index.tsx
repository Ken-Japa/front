"use client";

import { type FC, useState, lazy, Suspense } from "react";
import { Grid, Stack } from "@mui/material";

import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

import { SectionJoinTeam } from "./styled";
import { visitorColors } from "@/theme/palette/visitor";

const IMAGE_PROPS = {
    src: "/assets/images/background/Faca-Parte.jpg",
    alt: "Imagem de Fundo Faça Parte",
    fill: true,
    priority: true,
    sizes: "100vw",
    className: "object-cover",
    quality: 85
} as const;

const Header = lazy(() => import('./components/Header').then(mod => ({ default: mod.Header })));
const Benefits = lazy(() => import('./components/Benefits').then(mod => ({ default: mod.Benefits })));
const ApplicationForm = lazy(() => import('./components/ApplicationForm').then(mod => ({ default: mod.ApplicationForm })));

export const JoinTeam: FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <SectionJoinTeam>
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
                    <div className="container">
                        <div className="content-wrapper">
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={5}>
                                    <Stack spacing={6}>
                                        <SuspenseWrapper>
                                            <Header isLoading={!imageLoaded} />
                                        </SuspenseWrapper>
                                        <SuspenseWrapper>
                                            <Benefits isLoading={!imageLoaded} />
                                        </SuspenseWrapper>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <SuspenseWrapper>
                                        <ApplicationForm isLoading={!imageLoaded} />
                                    </SuspenseWrapper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </SectionJoinTeam>
            </ErrorBoundary>
        </PageTransition>
    );
};