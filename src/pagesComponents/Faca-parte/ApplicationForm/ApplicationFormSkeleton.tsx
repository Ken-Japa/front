import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const ApplicationFormSkeleton = () => {
    return (
        <ContentSkeleton
            type="form"
            formFields={6}
            className="p-6 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
        />
    );
};