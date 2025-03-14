import { ReactNode } from 'react';

interface PrivacySectionProps {
    id: string;
    title: string;
    children: ReactNode;
}

export const PrivacySection = ({ id, title, children }: PrivacySectionProps) => {
    return (
        <div id={id} className="bg-[#ffffff08] p-6 rounded-lg">
            <h2 className="text-2xl text-[#0D95F9] mb-5">{title}</h2>
            {children}
        </div>
    );
};