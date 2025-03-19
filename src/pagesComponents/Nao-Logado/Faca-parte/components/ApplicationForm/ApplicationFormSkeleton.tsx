import { type FC } from 'react';

import { Stack } from "@mui/material";

import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

const SKELETON_FIELDS = [
    { lines: 1 },
    { lines: 1 },
    { lines: 1 },
    { lines: 1 },
    { lines: 3 },
    { lines: 1 },
    { lines: 1 },
    { lines: 4 },
    { lines: 1 }
] as const;

export const ApplicationFormSkeleton: FC = () => (
    <Stack spacing={3}>
        {SKELETON_FIELDS.map((field, index) => (
            <ContentSkeleton 
                key={index}
                type="text" 
                textLines={field.lines} 
            />
        ))}
    </Stack>
);