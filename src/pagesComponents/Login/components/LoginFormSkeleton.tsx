import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { LoginFormStyled } from "./styled";

export const LoginFormSkeleton = () => {
    return (
        <LoginFormStyled>
            <div className="form-header text-center w-full mb-6">
                <ContentSkeleton type="text" textLines={2} className="bg-[#ffffff0a] backdrop-blur-sm" />
            </div>
            <ContentSkeleton type="text" textLines={1} className="mb-2 bg-[#ffffff0a] backdrop-blur-sm" />
            <ContentSkeleton type="text" textLines={1} className="mb-4 bg-[#ffffff0a] backdrop-blur-sm" />
            <ContentSkeleton type="text" textLines={1} className="h-12 mb-4 bg-[#ffffff0a] backdrop-blur-sm" />
            <ContentSkeleton type="text" textLines={1} className="mb-2 bg-[#ffffff0a] backdrop-blur-sm" />
            <ContentSkeleton type="text" textLines={1} className="h-12 mb-6 bg-[#ffffff0a] backdrop-blur-sm" />
            <div className="divider-container">
                <div className="divider" />
                <ContentSkeleton type="text" textLines={1} className="w-20 bg-[#ffffff0a] backdrop-blur-sm" />
                <div className="divider" />
            </div>
            <ContentSkeleton type="text" textLines={1} className="h-12 mb-4 bg-[#ffffff0a] backdrop-blur-sm" />
            <ContentSkeleton type="text" textLines={1} className="h-12 bg-[#ffffff0a] backdrop-blur-sm" />
        </LoginFormStyled>
    );
};