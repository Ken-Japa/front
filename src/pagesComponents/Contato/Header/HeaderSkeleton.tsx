import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const HeaderSkeleton = () => {
    return (
        <Stack spacing={2}>
            <ContentSkeleton
                type="text"
                textLines={3}
                className="p-4"
            />
        </Stack>
    );
};