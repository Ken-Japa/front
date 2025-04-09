import { type FC } from 'react';
import { Stack } from "@mui/material";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";
import { FormData, FormErrors } from '../../types';

interface ContactContentProps {
    imageLoaded: boolean;
    formData: FormData;
    errors: FormErrors;
    isBlocked: boolean;
    blockTimer: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    Header: React.LazyExoticComponent<FC<any>>;
    ContactInfo: React.LazyExoticComponent<FC<any>>;
    ContactFormComponent: React.LazyExoticComponent<FC<any>>;
    ContactFormSkeleton: React.LazyExoticComponent<FC>;
}

export const ContactContent: FC<ContactContentProps> = ({
    imageLoaded,
    formData,
    errors,
    isBlocked,
    blockTimer,
    handleChange,
    handleSubmit,
    Header,
    ContactInfo,
    ContactFormComponent,
    ContactFormSkeleton
}) => (
    <Stack spacing={4} className="content-container">
        <SuspenseWrapper>
            <Header isLoading={!imageLoaded} />
        </SuspenseWrapper>

        <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            className="form-container"
        >
            <SuspenseWrapper>
                <ContactInfo isLoading={!imageLoaded} />
            </SuspenseWrapper>

            <SuspenseWrapper>
                {!imageLoaded ? (
                    <ContactFormSkeleton />
                ) : (
                    <ContactFormComponent
                        formData={formData}
                        errors={errors}
                        isBlocked={isBlocked}
                        blockTimer={blockTimer}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                )}
            </SuspenseWrapper>
        </Stack>
    </Stack>
);