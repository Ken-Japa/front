import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { BaseSection, SectionTitle } from "../../styled";
import { HistoriaContainer } from "./styled";

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
        <HistoriaContainer>
            <ContentSkeleton 
                type="text" 
                textLines={4} 
                className="bg-[#ffffff0a] backdrop-blur-sm" 
            />
        </HistoriaContainer>
    </BaseSection>
);