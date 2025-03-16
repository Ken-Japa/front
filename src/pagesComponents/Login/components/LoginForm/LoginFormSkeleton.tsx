import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { LoginFormStyled } from "../styled";
import { FormHeaderSkeleton } from "../FormHeader/FormHeaderSkeleton";
import { SocialLoginSkeleton } from "../SocialLogin/SocialLoginSkeleton";

export const LoginFormSkeleton = () => {
    return (
        <LoginFormStyled>
            <FormHeaderSkeleton />

            {/* Email field */}
            <ContentSkeleton
                type="text"
                textLines={1}
                className="mb-2 bg-[#ffffff0a] backdrop-blur-sm"
            />
            <ContentSkeleton
                type="text"
                textLines={1}
                className="h-12 mb-4 bg-[#ffffff0a] backdrop-blur-sm"
            />

            {/* Password field */}
            <ContentSkeleton
                type="text"
                textLines={1}
                className="mb-2 bg-[#ffffff0a] backdrop-blur-sm"
            />
            <ContentSkeleton
                type="text"
                textLines={1}
                className="h-12 mb-4 bg-[#ffffff0a] backdrop-blur-sm"
            />

            {/* Forgot password */}
            <ContentSkeleton
                type="text"
                textLines={1}
                className="w-32 ml-auto mb-2 bg-[#ffffff0a] backdrop-blur-sm"
            />

            {/* Remember me */}
            <ContentSkeleton
                type="text"
                textLines={1}
                className="w-32 mb-4 bg-[#ffffff0a] backdrop-blur-sm"
            />

            {/* Login button */}
            <ContentSkeleton
                type="text"
                textLines={1}
                className="h-12 mb-6 bg-[#ffffff0a] backdrop-blur-sm"
            />

            <SocialLoginSkeleton />
        </LoginFormStyled>
    );
};