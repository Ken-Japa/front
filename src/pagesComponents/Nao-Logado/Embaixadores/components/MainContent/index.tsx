import { type FC } from 'react';

import { Container, Stack } from "@mui/material";

import { SuspenseWrapper } from "@/components/SuspenseWrapper";
import { ProgressiveLoad } from "@/components/ProgressiveLoad";

import { type Ambassador } from '../../types';
import { AmbassadorsGrid } from '../AmbassadorsGrid';

interface MainContentProps {
    isLoading: boolean;
    ambassadors: Ambassador[];
    Header: React.LazyExoticComponent<FC<{ isLoading?: boolean }>>;
    CallToAction: React.LazyExoticComponent<FC<{ isLoading?: boolean }>>;
}

const CONTAINER_STYLES = {
    maxWidth: "lg"
} as const;

export const MainContent: FC<MainContentProps> = ({ 
    isLoading, 
    ambassadors, 
    Header, 
    CallToAction 
}) => (
    <div className="relative z-10 py-16">
        <Container {...CONTAINER_STYLES}>
            <Stack spacing={8} alignItems="center">
                <SuspenseWrapper>
                    <Header isLoading={isLoading} />
                </SuspenseWrapper>

                <AmbassadorsGrid
                    ambassadors={ambassadors}
                    isLoading={isLoading}
                />

                <ProgressiveLoad>
                    <SuspenseWrapper>
                        <CallToAction isLoading={isLoading} />
                    </SuspenseWrapper>
                </ProgressiveLoad>
            </Stack>
        </Container>
    </div>
);