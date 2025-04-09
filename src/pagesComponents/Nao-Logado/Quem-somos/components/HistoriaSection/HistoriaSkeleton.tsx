import { ContentSkeleton } from "@/components/Feedback/Skeletons/ContentSkeleton";
import { BaseSection, SectionTitle, ContentContainer } from "../../styled";

export const HistoriaSkeleton = () => (
    <BaseSection>
        <SectionTitle>
            <ContentSkeleton
                type="text"
                textLines={1}
                className="w-64 bg-[#ffffff0a] backdrop-blur-sm"
            />
        </SectionTitle>
        <ContentSkeleton
            type="text"
            textLines={1}
            className="w-96 mb-8 bg-[#ffffff0a] backdrop-blur-sm"
        />
        <ContentContainer>
            <ContentSkeleton
                type="text"
                textLines={4}
                className="bg-[#ffffff0a] backdrop-blur-sm"
            />
        </ContentContainer>
    </BaseSection>
);