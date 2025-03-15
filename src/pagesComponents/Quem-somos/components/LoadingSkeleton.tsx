import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const LoadingSkeleton = () => (
    <div className="container mx-auto px-4 py-16 relative z-10">
        <Stack spacing={8} alignItems="center">
            <ContentSkeleton 
                type="text"
                textLines={2}
                className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
            />
            <ContentSkeleton 
                type="card"
                cardHeight={300}
                className="w-full bg-[#ffffff0a] backdrop-blur-sm"
            />
            <ContentSkeleton 
                type="card"
                cardHeight={250}
                className="w-full bg-[#ffffff0a] backdrop-blur-sm"
            />
            <Stack direction="row" spacing={2} width="100%" justifyContent="center">
                {Array(3).fill(0).map((_, index) => (
                    <ContentSkeleton 
                        key={`valor-${index}`} 
                        type="card"
                        cardHeight={200}
                        className="flex-1 bg-[#ffffff0a] backdrop-blur-sm"
                    />
                ))}
            </Stack>
            <ContentSkeleton 
                type="card"
                cardHeight={400}
                className="w-full bg-[#ffffff0a] backdrop-blur-sm"
            />
            <ContentSkeleton 
                type="card"
                cardHeight={300}
                className="w-full bg-[#ffffff0a] backdrop-blur-sm"
            />
        </Stack>
    </div>
);