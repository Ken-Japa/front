import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { BaseSection, SectionTitle, ContentContainer, Subtitle } from "../../styled";

export const CompromissoSkeleton = () => (
    <BaseSection>
        <SectionTitle>
            <ContentSkeleton 
                type="text" 
                textLines={1} 
                className="w-48 bg-[#ffffff0a] backdrop-blur-sm" 
            />
        </SectionTitle>
        <Subtitle>
            <ContentSkeleton 
                type="text" 
                textLines={1} 
                className="w-64 bg-[#ffffff0a] backdrop-blur-sm" 
            />
        </Subtitle>
        <ContentContainer>
            <ContentSkeleton 
                type="text" 
                textLines={3} 
                className="bg-[#ffffff0a] backdrop-blur-sm" 
            />
        </ContentContainer>
    </BaseSection>
);