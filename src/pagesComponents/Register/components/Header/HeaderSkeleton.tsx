import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { HeaderContainer } from "./styled";

export const HeaderSkeleton = () => (
    <HeaderContainer>
        <ContentSkeleton 
            type="text" 
            textLines={1} 
            className="matrix-title bg-[#ffffff0a] backdrop-blur-sm" 
        />
    </HeaderContainer>
);