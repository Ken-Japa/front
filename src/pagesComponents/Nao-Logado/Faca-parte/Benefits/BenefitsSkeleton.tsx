import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const BenefitsSkeleton = () => {
    return (
        <Stack spacing={2}>
            <ContentSkeleton
                type="card"
                cardHeight={300}
                className="bg-[#ffffff0a] backdrop-blur-sm"
            />
        </Stack>
    );
};