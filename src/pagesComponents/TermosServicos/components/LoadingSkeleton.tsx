import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const LoadingSkeleton = () => (
    <Stack spacing={4}>
        <Stack alignItems="center" spacing={2}>
            <ContentSkeleton />
            <ContentSkeleton />
            <ContentSkeleton />
        </Stack>

        <ContentSkeleton type="card" />

        {Array(10).fill(0).map((_, index) => (
            <ContentSkeleton
                key={`section-${index}`}
                type="card"
            />
        ))}
    </Stack>
);