import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const LoadingSkeleton = () => (
    <Stack spacing={4}>
        <Stack alignItems="center" spacing={2}>
            <ContentSkeleton 
                type="text"
                textLines={2}
                className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
            />
            <ContentSkeleton 
                type="text"
                textLines={3}
                className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
            />
            <ContentSkeleton 
                type="text"
                textLines={1}
                className="w-1/2 p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
            />
        </Stack>

        <ContentSkeleton 
            type="card"
            cardHeight={100}
            className="bg-[#ffffff0a] backdrop-blur-sm"
        />

        {Array(10).fill(0).map((_, index) => (
            <ContentSkeleton
                key={`section-${index}`}
                type="card"
                cardHeight={150}
                className="bg-[#ffffff0a] backdrop-blur-sm"
            />
        ))}
    </Stack>
);