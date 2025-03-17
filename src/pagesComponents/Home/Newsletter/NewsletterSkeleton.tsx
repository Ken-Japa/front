import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { NewsletterContainer } from "./styled";

export const NewsletterSkeleton = () => {
    return (
        <NewsletterContainer>
            <Stack spacing={3} alignItems="center">
                <ContentSkeleton
                    type="text"
                    textLines={1}
                    className="w-64 bg-[#ffffff0a] backdrop-blur-sm"
                />
                <ContentSkeleton
                    type="text"
                    textLines={1}
                    className="w-96 max-w-full bg-[#ffffff0a] backdrop-blur-sm"
                />
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width="100%" maxWidth="500px">
                    <ContentSkeleton
                        type="text"
                        textLines={1}
                        className="flex-1 h-14 bg-[#ffffff0a] backdrop-blur-sm"
                    />
                    <ContentSkeleton
                        type="text"
                        textLines={1}
                        className="w-32 h-14 bg-[#ffffff0a] backdrop-blur-sm"
                    />
                </Stack>
            </Stack>
        </NewsletterContainer>
    );
};