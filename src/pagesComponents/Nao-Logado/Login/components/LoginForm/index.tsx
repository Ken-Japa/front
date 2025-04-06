import { type FormEvent, type ChangeEvent } from 'react';
import Link from 'next/link';

import { TextField, FormControlLabel, Checkbox, Button } from "@mui/material";

import { FormData, FormErrors } from "../../types";
import { FormHeader } from "../FormHeader";
import { SocialLogin } from "../SocialLogin";
import { LoginFormSkeleton } from "./LoginFormSkeleton";
import {
    LoginFormStyled,
    ForgotPasswordLink,
    RememberMeContainer
} from "./styled";

interface LoginFormProps {
    formData: FormData;
    errors: FormErrors;
    isLoading: boolean;
    isBlocked: boolean;
    blockTimer: number;
    rememberMe: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent) => void;
    handleGoogleSignIn: () => Promise<void>;
    setRememberMe: (value: boolean) => void;
}

export const LoginFormComponent = ({
    formData,
    errors,
    isLoading,
    isBlocked,
    blockTimer,
    rememberMe,
    handleChange,
    handleSubmit,
    handleGoogleSignIn,
    setRememberMe
}: LoginFormProps) => {
    const commonTextFieldProps = {
        fullWidth: true,
        onChange: handleChange,
    };

    if (isLoading) {
        return <LoginFormSkeleton />;
    }

    const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

    return (
        <LoginFormStyled onSubmit={handleSubmit} id="login">
            <FormHeader />

            <TextField
                {...commonTextFieldProps}
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                error={!!errors.email}
                helperText={errors.email}
                id="email-login"
            />

            <TextField
                {...commonTextFieldProps}
                label="Senha"
                name="password"
                type="password"
                value={formData.password}
                error={!!errors.password}
                helperText={errors.password}
                id="senha-login"
            />

            <ForgotPasswordLink>
                <Link href="/forgot-password">
                    Esqueceu sua senha?
                </Link>
            </ForgotPasswordLink>

            <RememberMeContainer>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        />
                    }
                    label="Lembrar-me"
                    sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    id="lembrar-login"
                />
            </RememberMeContainer>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                disabled={isBlocked || !isFormValid}
                onClick={(e) => {
                    if (!isBlocked && isFormValid) {
                        handleSubmit(e);
                    }
                }}
            >
                {isBlocked ? `Bloqueado (${blockTimer}s)` : 'Entrar'}
            </Button>

            <SocialLogin
                handleGoogleSignIn={handleGoogleSignIn}
                isLoading={isLoading}
            />
        </LoginFormStyled>
    );
};