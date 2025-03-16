import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { BaseSection, ContentWrapper } from "../../styled";
import { FAQContainer } from "./styled";

export const FAQSkeleton = () => (
    <BaseSection>
        <ContentWrapper spacing={4}>
            <ContentSkeleton 
                type="text" 
                textLines={1} 
                className="w-64 bg-[#ffffff0a] backdrop-blur-sm" 
            />
            <FAQContainer>
                {Array(3).fill(0).map((_, index) => (
                    <ContentSkeleton 
                        key={`faq-${index}`} 
                        type="card" 
                        cardHeight={80} 
                        className="bg-[#ffffff0a] backdrop-blur-sm" 
                    />
                ))}
            </FAQContainer>
        </ContentWrapper>
    </BaseSection>
);