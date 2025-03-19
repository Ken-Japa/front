import { type FC, useState } from "react";
import { Stack } from "@mui/material";

import { JoinTeamForm } from "./styled";
import { ApplicationFormSkeleton } from "./ApplicationFormSkeleton";
import { FormFields } from './components/FormFields';
import { FormSnackbar } from './components/FormSnackbar';
import { SubmitButton } from './components/SubmitButton';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useBlockTimer } from '../../hooks/useBlockTimer';
import { useFormState } from '../../hooks/useFormState';
import type { ApplicationFormProps } from '../../types';

export const ApplicationForm: FC<ApplicationFormProps> = ({ isLoading }) => {
    const [joinAttempts, setJoinAttempts] = useState(0);
    const { isBlocked, blockTimer, blockUser } = useBlockTimer();
    const { validateForm } = useFormValidation();
    const {
        formData,
        errors,
        setErrors,
        isSubmitting,
        setIsSubmitting,
        snackbar,
        setSnackbar,
        handleChange,
        closeSnackbar
    } = useFormState();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isBlocked) {
            setSnackbar({
                open: true,
                message: `Por favor, aguarde ${blockTimer} segundos antes de tentar novamente.`,
                severity: 'error'
            });
            return;
        }

        const { isValid, errors: validationErrors } = validateForm(formData);
        setErrors(validationErrors);

        if (isValid) {
            setJoinAttempts((prev) => {
                const newAttempts = prev + 1;
                if (newAttempts >= 2) {
                    blockUser();
                    return 0;
                }
                return newAttempts;
            });

            setIsSubmitting(true);
            try {
                // ... existing submission logic ...
            } catch (error) {
                setSnackbar({
                    open: true,
                    message: 'Erro ao enviar candidatura. Tente novamente.',
                    severity: 'error'
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    if (isLoading) return <ApplicationFormSkeleton />;

    return (
        <>
            <JoinTeamForm onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <FormFields
                        formData={formData}
                        errors={errors}
                        handleChange={handleChange}
                    />
                    <SubmitButton
                        isSubmitting={isSubmitting}
                        isBlocked={isBlocked}
                        blockTimer={blockTimer}
                    />
                </Stack>
            </JoinTeamForm>
            <FormSnackbar
                {...snackbar}
                onClose={closeSnackbar}
            />
        </>
    );
};
