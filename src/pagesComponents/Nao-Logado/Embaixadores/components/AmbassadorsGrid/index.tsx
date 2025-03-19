import { type FC } from 'react';

import { Box } from "@mui/material";

import { ProgressiveLoad } from "@/components/ProgressiveLoad";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

import { type Ambassador } from '../../types';
import { AmbassadorCard } from "../AmbassadorCard";

interface AmbassadorsGridProps {
    ambassadors: Ambassador[];
    isLoading: boolean;
}

const GRID_STYLES = {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
} as const;

export const AmbassadorsGrid: FC<AmbassadorsGridProps> = ({ ambassadors, isLoading }) => (
    <Box {...GRID_STYLES}>
        {ambassadors.map((ambassador, index) => (
            <ProgressiveLoad key={index} rootMargin="100px">
                <SuspenseWrapper>
                    <AmbassadorCard
                        {...ambassador}
                        index={index}
                        isLoading={isLoading}
                    />
                </SuspenseWrapper>
            </ProgressiveLoad>
        ))}
    </Box>
);