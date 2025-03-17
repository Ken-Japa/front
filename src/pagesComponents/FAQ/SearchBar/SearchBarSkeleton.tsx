import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const SearchBarSkeleton = () => {
    return (
        <ContentSkeleton
            type="text"
            textLines={1}
            className="p-3 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
        />
    );
};