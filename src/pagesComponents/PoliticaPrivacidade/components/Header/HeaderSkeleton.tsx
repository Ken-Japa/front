import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { HeaderWrapper } from "./styled";

export const HeaderSkeleton = () => {
    return (
        <HeaderWrapper>
            <div className="header-content">
                <ContentSkeleton
                    type="text"
                    textLines={1}
                    className="w-48 bg-[#ffffff0a] backdrop-blur-sm"
                />
            </div>
            <ContentSkeleton
                type="text"
                textLines={1}
                className="w-32 mb-2 bg-[#ffffff0a] backdrop-blur-sm"
            />
            <ContentSkeleton
                type="text"
                textLines={2}
                className="max-w-xl mx-auto bg-[#ffffff0a] backdrop-blur-sm"
            />
        </HeaderWrapper>
    );
};