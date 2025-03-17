import { ReactNode } from "react";
import { SectionContainer } from "./styled";
import { PrivacySectionSkeleton } from "./PrivacySectionSkeleton";

interface PrivacySectionProps {
    id: string;
    title: string;
    children: ReactNode;
    isLoading?: boolean;
}

export const PrivacySection = ({ id, title, children, isLoading }: PrivacySectionProps) => {

    if (isLoading) {
        return <PrivacySectionSkeleton />;
    }
    return (
        <SectionContainer id={id}>
            <h2 className="section-title">{title}</h2>
            <div className="section-content">
                {children}
            </div>
        </SectionContainer>
    );
};