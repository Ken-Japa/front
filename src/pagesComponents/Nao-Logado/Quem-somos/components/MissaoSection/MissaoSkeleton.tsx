import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { BaseSection, SectionTitle } from "../../styled";
import { MissaoContainer, Subtitle } from "./styled";

export const MissaoSkeleton = () => (
    <BaseSection>
        <SectionTitle>
            <ContentSkeleton 
                type="text" 
                textLines={1} 
                className="w-64 bg-[#ffffff0a] backdrop-blur-sm" 
            />
        </SectionTitle>
        <Subtitle>
            <ContentSkeleton 
                type="text" 
                textLines={1} 
                className="w-48 bg-[#ffffff0a] backdrop-blur-sm" 
            />
        </Subtitle>
        <MissaoContainer>
            <ContentSkeleton 
                type="text" 
                textLines={5} 
                className="bg-[#ffffff0a] backdrop-blur-sm" 
            />
        </MissaoContainer>
    </BaseSection>
);