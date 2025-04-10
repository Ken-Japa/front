"use client";

import { type FC, useState, lazy } from "react";
import { Grid, Stack } from "@mui/material";

import { OptimizedImage } from "@/components/Utils/OptimizedImage";
import { ErrorBoundary } from '@/components/Feedback/ErrorBoundary';
import { SuspenseWrapper } from "@/components/Feedback/SuspenseWrapper";

import { SectionJoinTeam, StyledPageTransition, BackgroundImage } from "./styled";

const IMAGE_PROPS = {
    src: "/assets/images/background/Faca-Parte.jpg",
    alt: "Imagem de Fundo Faça Parte",
    fill: true,
    priority: true,
    sizes: "100vw",
    className: "object-cover",
    quality: 100,
    loadingClassName: "scale-100 blur-sm grayscale-0"
} as const;

const Header = lazy(() => import('./components/Header').then(mod => ({ default: mod.Header })));
const Benefits = lazy(() => import('./components/Benefits').then(mod => ({ default: mod.Benefits })));
const ApplicationForm = lazy(() => import('./components/ApplicationForm').then(mod => ({ default: mod.ApplicationForm })));

export const JoinTeam: FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <StyledPageTransition direction="up" duration={0.4} distance={30}>
            <ErrorBoundary>
                <SectionJoinTeam>
                    <div className="background-image">
                        <BackgroundImage isLoaded={imageLoaded}>
                            <OptimizedImage
                                {...IMAGE_PROPS}
                                onLoad={() => setImageLoaded(true)}
                            />
                        </BackgroundImage>
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
        </StyledPageTransition>
    );
};