import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { BaseSection, ContentWrapper } from "../../styled";
import { PlanosGrid } from "./styled";

export const PlanosSkeleton = () => (
    <BaseSection>
        <ContentWrapper spacing={6}>
            <ContentSkeleton 
                type="text" 
                textLines={1} 
                className="w-64 bg-[#ffffff0a] backdrop-blur-sm" 
            />
            <PlanosGrid>
                {Array(3).fill(0).map((_, index) => (
                    <ContentSkeleton 
                        key={`plano-${index}`} 
                        type="card" 
                        cardHeight={300} 
                        className="bg-[#ffffff0a] backdrop-blur-sm" 
                    />
                ))}
            </PlanosGrid>
        </ContentWrapper>
    </BaseSection>
);