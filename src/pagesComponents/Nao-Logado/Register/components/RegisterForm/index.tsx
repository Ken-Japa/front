import { type FormEvent, type ChangeEvent, type MouseEvent } from 'react';
import Link from 'next/link';

import { Stack, Typography } from "@mui/material";

import { FormData, FormErrors } from "../../types";
import { RegisterHeader } from "../Header";
import { FormFields } from "../FormFields";
import { TermsCheckbox } from "../TermsCheckbox";
import { GoogleSignInButton } from "../GoogleSignInButton";
import { RegisterFormSkeleton } from "./RegisterFormSkeleton";
import { RegisterFormStyled, SubmitButton } from "./styled";

interface RegisterFormProps {
    formData: FormData;
    errors: FormErrors;
    acceptedTerms: boolean;
    onSubmit: (e: FormEvent) => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onTermsChange: (checked: boolean) => void;
    onGoogleClick: (e: MouseEvent<HTMLButtonElement>) => void;
    isLoading?: boolean;
}

export const RegisterFormContent = ({
    formData,
    errors,
    acceptedTerms,
    onSubmit,
    onChange,
    onTermsChange,
    onGoogleClick,
    isLoading
}: RegisterFormProps) => {
    if (isLoading) {
        return <RegisterFormSkeleton />;
    }

    const isFormValid = Object.values(formData).every(value => value.trim() !== '') && acceptedTerms;

    return (
        <RegisterFormStyled onSubmit={onSubmit}>
            <RegisterHeader />
            
            <FormFields
                formData={formData}
                errors={errors}
                onChange={onChange}
            />
            
            <TermsCheckbox
                checked={acceptedTerms}
                onChange={onTermsChange}
            />

            <Stack direction="row" justifyContent="center" sx={{ mt: 2, mb: 3 }}>
                <Typography 
                    variant="body2" 
                    sx={{ color: 'white', opacity: 0.9 }}
                >
                    Já possui uma conta?{' '}
                    <Link
                        href="/login"
                        className="text-[#0D95F9] hover:text-[#0D95F9]/80 transition-colors underline"
                    >
                        Faça seu login
                    </Link>
                </Typography>
            </Stack>

            <SubmitButton
                type="submit"
                variant="contained"
                fullWidth
                disabled={!isFormValid}
            >
                Criar conta
            </SubmitButton>

            <div className="divider-container">
                <div className="divider" />
                <span className="divider-text">ou</span>
                <div className="divider" />
            </div>

            <GoogleSignInButton onClick={onGoogleClick} />
        </RegisterFormStyled>
    );
};