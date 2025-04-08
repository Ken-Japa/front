import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { BaseSection, SectionTitle, ContentContainer } from "../../styled";

export const EquipeSkeleton = () => (
    <BaseSection>
        <SectionTitle>
            <ContentSkeleton
                type="text"
                textLines={1}
                className="w-48 bg-[#ffffff0a] backdrop-blur-sm"
            />
        </SectionTitle>
        <ContentSkeleton
            type="text"
            textLines={1}
            className="w-64 mb-8 bg-[#ffffff0a] backdrop-blur-sm"
        />
        <ContentContainer>
            <ContentSkeleton
                type="text"
                textLines={3}
                className="bg-[#ffffff0a] backdrop-blur-sm"
            />
        </ContentContainer>
    </BaseSection>
);