import { TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import { FormHeader } from "../FormHeader";
import { SocialLogin } from "../SocialLogin";
import { LoginFormSkeleton } from "./LoginFormSkeleton";
import { LoginFormStyled } from "./styled";
import { FormData, FormErrors } from "../../types";
import Link from 'next/link';
import { ForgotPasswordLink, RememberMeContainer } from './styled';

interface LoginFormProps {
    formData: FormData;
    errors: FormErrors;
    isLoading: boolean;
    isBlocked: boolean;
    blockTimer: number;
    rememberMe: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    handleGoogleSignIn: () => void;
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
    if (isLoading) {
        return <LoginFormSkeleton />;
    }

    return (
        <LoginFormStyled onSubmit={handleSubmit} id="login">
            <FormHeader />

            <TextField
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
                id="email-login"
            />

            <TextField
                label="Senha"
                name="senha"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                fullWidth
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
                disabled={isBlocked}
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