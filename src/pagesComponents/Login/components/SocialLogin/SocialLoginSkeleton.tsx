import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const SocialLoginSkeleton = () => {
    return (
        <>
            <div className="divider-container">
                <div className="divider" />
                <ContentSkeleton 
                    type="text" 
                    textLines={1} 
                    className="w-20 bg-[#ffffff0a] backdrop-blur-sm" 
                />
                <div className="divider" />
            </div>
            <ContentSkeleton 
                type="text" 
                textLines={1} 
                className="h-12 mb-4 bg-[#ffffff0a] backdrop-blur-sm" 
            />
            <ContentSkeleton 
                type="text" 
                textLines={1} 
                className="w-48 bg-[#ffffff0a] backdrop-blur-sm" 
            />
        </>
    );
};