import { type FC } from 'react';

import { Stack } from "@mui/material";

import { ContentSkeleton } from "@/components/Feedback/Skeletons/ContentSkeleton";
import { visitorColors } from "@/theme/palette/visitor";

export const HeaderSkeleton: FC = () => (
    <Stack spacing={2}>
        <ContentSkeleton
            type="text"
            textLines={2}
            className={`${visitorColors.skeletonBackground} backdrop-blur-sm`}
        />
    </Stack>
);