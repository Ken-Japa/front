"use client";

import { useState } from "react";
import { SectionJoinTeam } from "./styled";
import { Grid, Stack } from "@mui/material";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
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
                            onLoadingComplete={() => setImageLoaded(true)}
                        />
                    </div>
                    <div className="container">
                        <div className="content-wrapper">
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={5}>
                                    {!imageLoaded ? (
                                        <Stack spacing={6}>
                                            <ContentSkeleton 
                                                type="text"
                                                textLines={3}
                                                className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
                                            />
                                            <ContentSkeleton 
                                                type="card"
                                                cardHeight={300}
                                                className="bg-[#ffffff0a] backdrop-blur-sm"
                                            />
                                        </Stack>
                                    ) : (
                                        <Stack spacing={6}>
                                            <Header isLoading={!imageLoaded} />
                                            <Benefits isLoading={!imageLoaded} />
                                        </Stack>
                                    )}
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    {!imageLoaded ? (
                                        <ContentSkeleton 
                                            type="form"
                                            formFields={6}
                                            className="p-6 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
                                        />
                                    ) : (
                                        <ApplicationForm isLoading={!imageLoaded} />
                                    )}
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </SectionJoinTeam>
            </ErrorBoundary>
        </PageTransition>
    );
};