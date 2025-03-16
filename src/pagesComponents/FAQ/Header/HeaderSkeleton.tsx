"use client";

import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const HeaderSkeleton = () => {
    return (
        <Stack spacing={2}>
            <ContentSkeleton 
                type="text"
                textLines={2}
                className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
            />
        </Stack>
    );
};