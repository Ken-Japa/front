import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { BaseSection, ContentWrapper } from "../../styled";
import { VantagensGrid } from "./styled";

export const VantagensSkeleton = () => (
    <BaseSection>
        <ContentWrapper spacing={6}>
            <ContentSkeleton 
                type="text" 
                textLines={1} 
                className="w-96 bg-[#ffffff0a] backdrop-blur-sm" 
            />
            <VantagensGrid>
                {Array(3).fill(0).map((_, index) => (
                    <ContentSkeleton 
                        key={`vantagem-${index}`} 
                        type="card" 
                        cardHeight={150} 
                        className="bg-[#ffffff0a] backdrop-blur-sm" 
                    />
                ))}
            </VantagensGrid>
        </ContentWrapper>
    </BaseSection>
);