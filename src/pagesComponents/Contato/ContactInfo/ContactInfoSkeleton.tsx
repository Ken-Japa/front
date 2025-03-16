"use client";

import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const ContactInfoSkeleton = () => {
    return (
        <Stack spacing={3}>
            <ContentSkeleton 
                type="text"
                textLines={3}
                className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
            />
        </Stack>
    );
};