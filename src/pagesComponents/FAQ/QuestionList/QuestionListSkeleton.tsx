"use client";

import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const QuestionListSkeleton = () => {
    return (
        <Stack spacing={2}>
            {Array(8).fill(0).map((_, index) => (
                <ContentSkeleton
                    key={index}
                    type="card"
                    cardHeight={120}
                    className="bg-[#ffffff0a] backdrop-blur-sm"
                />
            ))}
        </Stack>
    );
};