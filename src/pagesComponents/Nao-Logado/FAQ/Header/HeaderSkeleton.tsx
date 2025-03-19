import { type FC } from 'react';

import { Stack } from "@mui/material";

import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

const SKELETON_PROPS = {
    type: "text" as const,
    textLines: 2,
    className: "p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
} as const;

export const HeaderSkeleton: FC = () => (
    <Stack spacing={2}>
        <ContentSkeleton {...SKELETON_PROPS} />
    </Stack>
);