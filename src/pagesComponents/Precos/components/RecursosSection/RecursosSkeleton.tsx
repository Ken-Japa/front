import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { BaseSection, ContentWrapper } from "../../styled";
import { RecursosContainer } from "./styled";

export const RecursosSkeleton = () => (
    <BaseSection>
        <ContentWrapper spacing={4}>
            <ContentSkeleton
                type="text"
                textLines={1}
                className="w-64 bg-[#ffffff0a] backdrop-blur-sm"
            />
            <RecursosContainer>
                <div className="recursos-grid">
                    {Array(6).fill(0).map((_, index) => (
                        <ContentSkeleton
                            key={`recurso-${index}`}
                            type="text"
                            textLines={1}
                            className="bg-[#ffffff0a] backdrop-blur-sm"
                        />
                    ))}
                </div>
            </RecursosContainer>
        </ContentWrapper>
    </BaseSection>
);