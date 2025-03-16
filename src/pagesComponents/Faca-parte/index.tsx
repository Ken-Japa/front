"use client";

import { useState, lazy } from "react";
import { SectionJoinTeam } from "./styled";
import { Grid, Stack } from "@mui/material";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

const Header = lazy(() => import('./Header').then(mod => ({ default: mod.Header })));
const Benefits = lazy(() => import('./Benefits').then(mod => ({ default: mod.Benefits })));
const ApplicationForm = lazy(() => import('./ApplicationForm').then(mod => ({ default: mod.ApplicationForm })));

export const JoinTeam = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <SectionJoinTeam>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/Faca-Parte.jpg"
                            alt="Join Team Background"
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