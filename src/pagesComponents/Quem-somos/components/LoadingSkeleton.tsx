import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const LoadingSkeleton = () => (
    <div className="container mx-auto px-4 py-16 relative z-10">
        <Stack spacing={8} alignItems="center">
            <ContentSkeleton />
            <ContentSkeleton type="card" />
            <ContentSkeleton type="card" />
            <Stack direction="row" spacing={2} width="100%" justifyContent="center">
                {Array(3).fill(0).map((_, index) => (
                    <ContentSkeleton key={`valor-${index}`} type="card" />
                ))}
            </Stack>
            <ContentSkeleton type="card" />
            <ContentSkeleton type="card" />
        </Stack>
    </div>
);