import { ContentSkeleton } from "@/components/Feedback/Skeletons/ContentSkeleton";
import { HeaderContainer } from "./styled";

export const HeaderSkeleton = () => (
    <HeaderContainer>
        <ContentSkeleton
            type="text"
            textLines={1}
            className="header-title bg-[#ffffff0a] backdrop-blur-sm"
        />
        <ContentSkeleton
            type="text"
            textLines={2}
            className="header-subtitle bg-[#ffffff0a] backdrop-blur-sm"
        />
    </HeaderContainer>
);