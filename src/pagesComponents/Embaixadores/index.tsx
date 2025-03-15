"use client";

import { Container, Box, Stack } from "@mui/material";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ambassadors } from './constants/ambassadors';
import { Header } from "./components/Header";
import { AmbassadorCard } from "./components/AmbassadorCard";
import { CallToAction } from "./components/CallToAction";

export default function Ambassadors() {
    return (
        <PageTransition>
            <ErrorBoundary>
                <main className="min-h-screen bg-gradient-to-b from-black to-[#001529] py-32">
                    <Container maxWidth="lg">
                        <Stack spacing={8} alignItems="center">
                            <Header />

                            <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                                {ambassadors.map((ambassador, index) => (
                                    <AmbassadorCard
                                        key={index}
                                        {...ambassador}
                                        index={index}
                                    />
                                ))}
                            </Box>

                            <CallToAction />
                        </Stack>
                    </Container>
                </main>
            </ErrorBoundary>
        </PageTransition>
    );
}