import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { RegisterFormStyled } from "./styled";
import { HeaderSkeleton } from "../Header/HeaderSkeleton";
import { FormFieldsSkeleton } from "../FormFields/FormFieldsSkeleton";

export const RegisterFormSkeleton = () => (
    <RegisterFormStyled>
        <HeaderSkeleton />
        <FormFieldsSkeleton />

        {/* Terms checkbox */}
        <ContentSkeleton
            type="text"
            textLines={1}
            className="h-10 w-full bg-[#ffffff0a] backdrop-blur-sm"
        />

        {/* Login link */}
        <ContentSkeleton
            type="text"
            textLines={1}
            className="h-8 w-48 mx-auto mt-4 bg-[#ffffff0a] backdrop-blur-sm"
        />

        {/* Submit button */}
        <ContentSkeleton
            type="text"
            textLines={1}
            className="h-12 w-full mt-4 bg-[#ffffff0a] backdrop-blur-sm"
        />

        <div className="divider-container">
            <div className="divider" />
            <ContentSkeleton
                type="text"
                textLines={1}
                className="w-8 bg-[#ffffff0a] backdrop-blur-sm"
            />
            <div className="divider" />
        </div>

        {/* Google button */}
        <ContentSkeleton
            type="text"
            textLines={1}
            className="h-12 w-full bg-[#ffffff0a] backdrop-blur-sm"
        />
    </RegisterFormStyled>
);