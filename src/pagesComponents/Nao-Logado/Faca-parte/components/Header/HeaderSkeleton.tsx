import { type FC } from 'react';

import { Stack } from "@mui/material";

import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

const SKELETON_STYLES = {
    type: "text" as const,
    textLines: 3,
    className: "p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
} as const;

export const HeaderSkeleton: FC = () => (
    <Stack spacing={2}>
        <ContentSkeleton {...SKELETON_STYLES} />
    </Stack>
);