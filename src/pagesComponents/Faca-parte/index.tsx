"use client";

import { useState } from "react";
import { SectionJoinTeam } from "./styled";
import { Grid, Stack } from "@mui/material";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Header } from "./Header";
import { Benefits } from "./Benefits";
import { ApplicationForm } from "./ApplicationForm";

export const JoinTeam = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <PageTransition
            direction="up"
            duration={0.4}
            distance={30}
            className="w-full"
        >
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
                                        <Header isLoading={!imageLoaded} />
                                        <Benefits isLoading={!imageLoaded} />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <ApplicationForm isLoading={!imageLoaded} />
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </SectionJoinTeam>
            </ErrorBoundary>
        </PageTransition>
    );
};