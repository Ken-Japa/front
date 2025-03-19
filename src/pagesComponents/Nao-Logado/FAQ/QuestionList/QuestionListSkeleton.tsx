import { type FC } from 'react';

import { Stack } from "@mui/material";

import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

const SKELETON_COUNT = 8;

const SKELETON_PROPS = {
    type: "card" as const,
    cardHeight: 120,
    className: "bg-[#ffffff0a] backdrop-blur-sm"
} as const;

export const QuestionListSkeleton: FC = () => (
    <Stack spacing={2}>
        {Array(SKELETON_COUNT).fill(0).map((_, index) => (
            <ContentSkeleton
                key={`skeleton-${index}`}
                {...SKELETON_PROPS}
            />
        ))}
    </Stack>
);