import { type FC } from 'react';

import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

import { ContactInfoSkeletonStyled } from "./styled";

export const ContactInfoSkeleton: FC = () => (
    <ContactInfoSkeletonStyled spacing={3}>
        <ContentSkeleton
            type="text"
            textLines={3}
            className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
        />
    </ContactInfoSkeletonStyled>
);