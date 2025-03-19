import { type FC } from 'react';

import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

const SKELETON_PROPS = {
    type: "text" as const,
    textLines: 1,
    className: "p-3 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
} as const;

export const SearchBarSkeleton: FC = () => (
    <ContentSkeleton {...SKELETON_PROPS} />
);