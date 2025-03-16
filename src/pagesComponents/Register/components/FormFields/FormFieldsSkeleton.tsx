import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const FormFieldsSkeleton = () => (
    <Stack spacing={2} width="100%">
        {/* Name field */}
        <ContentSkeleton 
            type="text" 
            textLines={1} 
            className="h-14 bg-[#ffffff0a] backdrop-blur-sm" 
        />
        {/* CPF field */}
        <ContentSkeleton 
            type="text" 
            textLines={1} 
            className="h-14 bg-[#ffffff0a] backdrop-blur-sm" 
        />
        {/* Phone field */}
        <ContentSkeleton 
            type="text" 
            textLines={1} 
            className="h-14 bg-[#ffffff0a] backdrop-blur-sm" 
        />
        {/* Email field */}
        <ContentSkeleton 
            type="text" 
            textLines={1} 
            className="h-14 bg-[#ffffff0a] backdrop-blur-sm" 
        />
        {/* Password field */}
        <ContentSkeleton 
            type="text" 
            textLines={1} 
            className="h-14 bg-[#ffffff0a] backdrop-blur-sm" 
        />
        {/* Confirm Password field */}
        <ContentSkeleton 
            type="text" 
            textLines={1} 
            className="h-14 bg-[#ffffff0a] backdrop-blur-sm" 
        />
    </Stack>
);