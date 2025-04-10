import { type FC } from 'react';

import { Box } from "@mui/material";

import { ContentSkeleton } from "@/components/Feedback/Skeletons/ContentSkeleton";
import { visitorColors } from "@/theme/palette/visitor";

import { ContactFormSkeletonStyled } from "./styled";

export const ContactFormSkeleton: FC = () => (
    <ContactFormSkeletonStyled>
        <Box flex={1}>
            <ContentSkeleton
                type="form"
                formFields={5}
                className={`p-6 ${visitorColors.skeletonBackground} rounded-lg backdrop-blur-sm`}
            />
        </Box>
    </ContactFormSkeletonStyled>
);