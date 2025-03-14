import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { RegisterForm } from "../styled";

export const RegisterLoadingSkeleton = () => (
    <RegisterForm>
        <div className="form-header text-center w-full mb-6">
            <ContentSkeleton />
        </div>
        <ContentSkeleton />
        <ContentSkeleton />
        <ContentSkeleton />
        <ContentSkeleton />
        <ContentSkeleton />
        <ContentSkeleton />
        <ContentSkeleton />
        
        <div className="divider-container">
            <div className="divider" />
            <ContentSkeleton />
            <div className="divider" />
        </div>
        
        <ContentSkeleton />
        <ContentSkeleton />
    </RegisterForm>
);