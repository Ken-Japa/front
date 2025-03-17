import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const ApplicationFormSkeleton = () => {
    return (
        <Stack spacing={3}>
            <ContentSkeleton type="text" textLines={1} />
            <ContentSkeleton type="text" textLines={1} />
            <ContentSkeleton type="text" textLines={1} />
            <ContentSkeleton type="text" textLines={1} />
            <ContentSkeleton type="text" textLines={3} />
            <ContentSkeleton type="text" textLines={1} />
            <ContentSkeleton type="text" textLines={1} />
            <ContentSkeleton type="text" textLines={4} />
            <ContentSkeleton type="text" textLines={1} />
        </Stack>
    );
};