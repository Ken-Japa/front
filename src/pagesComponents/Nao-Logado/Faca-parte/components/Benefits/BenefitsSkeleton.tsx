import { type FC } from 'react';

import { Stack } from "@mui/material";

import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

const SKELETON_STYLES = {
    cardHeight: 300,
    className: "bg-[#ffffff0a] backdrop-blur-sm"
} as const;

export const BenefitsSkeleton: FC = () => (
    <Stack spacing={2}>
        <ContentSkeleton
            type="card"
            {...SKELETON_STYLES}
        />
    </Stack>
);