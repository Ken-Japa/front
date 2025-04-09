import { type FC } from 'react';
import { visitorColors } from "@/theme/palette/visitor";

import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

const SKELETON_PROPS = {
    type: "text" as const,
    textLines: 1,
    className: `p-3 ${visitorColors.skeletonBackground} rounded-lg backdrop-blur-sm`
} as const;

export const SearchBarSkeleton: FC = () => (
    <ContentSkeleton {...SKELETON_PROPS} />
);