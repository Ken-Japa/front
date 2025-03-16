import { Stack } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { HeaderContainer } from "./styled";

export const HeaderSkeleton = () => (
    <HeaderContainer>
        <div className="header-icon-container">
            <ContentSkeleton 
                type="text" 
                textLines={1} 
                className="w-96 bg-[#ffffff0a] backdrop-blur-sm" 
            />
        </div>
        <ContentSkeleton 
            type="text" 
            textLines={1} 
            className="w-64 bg-[#ffffff0a] backdrop-blur-sm" 
        />
        <ContentSkeleton 
            type="text" 
            textLines={1} 
            className="w-80 bg-[#ffffff0a] backdrop-blur-sm" 
        />
    </HeaderContainer>
);