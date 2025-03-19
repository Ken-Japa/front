import { type FC } from 'react';
import { Skeleton } from "@mui/material";
import { HeaderContainer } from "./styled";

const SKELETON_STYLES = {
    bgcolor: 'rgba(255,255,255,0.1)'
} as const;

const SKELETON_DIMENSIONS = {
    icon: { width: 60, height: 60 },
    title: { width: 200, height: 60 },
    subtitle: { width: 180, height: 40 },
    description: { width: 500, height: 60 }
} as const;

export const HeaderSkeleton: FC = () => (
    <HeaderContainer spacing={3}>
        <Skeleton 
            variant="circular" 
            width={SKELETON_DIMENSIONS.icon.width} 
            height={SKELETON_DIMENSIONS.icon.height} 
            sx={SKELETON_STYLES} 
        />
        <Skeleton 
            variant="text" 
            width={SKELETON_DIMENSIONS.title.width} 
            height={SKELETON_DIMENSIONS.title.height} 
            sx={SKELETON_STYLES} 
        />
        <Skeleton 
            variant="text" 
            width={SKELETON_DIMENSIONS.subtitle.width} 
            height={SKELETON_DIMENSIONS.subtitle.height} 
            sx={SKELETON_STYLES} 
        />
        <Skeleton 
            variant="text" 
            width={SKELETON_DIMENSIONS.description.width} 
            height={SKELETON_DIMENSIONS.description.height} 
            sx={SKELETON_STYLES} 
        />
    </HeaderContainer>
);