import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { BaseSection, ContentWrapper } from "../../styled";

export const EmbaixadorSkeleton = () => (
    <BaseSection>
        <ContentWrapper spacing={4}>
            <ContentSkeleton 
                type="text" 
                textLines={1} 
                className="w-64 bg-[#ffffff0a] backdrop-blur-sm" 
            />
            <ContentSkeleton 
                type="text" 
                textLines={2} 
                className="max-w-2xl mx-auto bg-[#ffffff0a] backdrop-blur-sm" 
            />
            <ContentSkeleton 
                type="card" 
                cardHeight={400} 
                className="max-w-md mx-auto bg-[#ffffff0a] backdrop-blur-sm" 
            />
        </ContentWrapper>
    </BaseSection>
);