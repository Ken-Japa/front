import { ReactNode } from "react";
import { SectionContainer } from "./styled";

interface PrivacySectionProps {
    id: string;
    title: string;
    children: ReactNode;
}

export const PrivacySection = ({ id, title, children }: PrivacySectionProps) => {
    return (
        <SectionContainer id={id}>
            <h2 className="section-title">{title}</h2>
            <div className="section-content">
                {children}
            </div>
        </SectionContainer>
    );
};