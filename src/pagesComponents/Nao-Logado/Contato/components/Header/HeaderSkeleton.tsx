import { type FC } from 'react';

import { Stack } from "@mui/material";

import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

import { HeaderSkeletonStyled } from "./styled";

export const HeaderSkeleton: FC = () => (
    <HeaderSkeletonStyled spacing={2}>
        <ContentSkeleton
            type="text"
            textLines={3}
            className="p-4 bg-[#ffffff0a] backdrop-blur-sm"
        />
    </HeaderSkeletonStyled>
);