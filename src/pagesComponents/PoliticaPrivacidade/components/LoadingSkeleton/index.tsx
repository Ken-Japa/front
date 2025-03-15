import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const LoadingSkeleton = () => (
    <Stack spacing={3} width="100%">
        <ContentSkeleton 
            type="text"
            textLines={2}
            className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
        />
        <ContentSkeleton 
            type="text"
            textLines={4}
            className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
        />
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
    </Stack>
);