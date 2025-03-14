import { FormHeader } from './FormHeader';
import { SocialLogin } from './SocialLogin';
import { TextField, Button, Typography, CircularProgress, Checkbox, FormControlLabel, Link as MuiLink } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';
import { LoginFormStyled } from "./styled";
import { LoginFormSkeleton } from "./LoginFormSkeleton";

interface LoginFormProps {
    formData: { email: string; password: string };
    errors: { email?: string; password?: string };
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
        <LoginFormStyled onSubmit={handleSubmit}>
            <FormHeader />

            <TextField
                name="email"
                label="E-mail"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
            />

            <TextField
                name="password"
                label="Senha"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
            />

            <MuiLink
                href="/forgot-password"
                sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    alignSelf: 'flex-end',
                    marginTop: 1,
                    display: 'block',
                    textAlign: 'right',
                    '&:hover': {
                        textDecoration: 'underline'
                    }
                }}
            >
                Esqueceu sua senha?
            </MuiLink>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        sx={{ color: 'white', '&.Mui-checked': { color: 'primary.main' } }}
                    />
                }
                label={<Typography color="white">Lembrar-me</Typography>}
                sx={{ marginTop: 1 }}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                disabled={isLoading || isBlocked}
                sx={{ marginTop: '24px' }}
            >
                {isLoading ? (
                    <CircularProgress size={24} color="inherit" />
                ) : isBlocked ? (
                    `Tente novamente em ${blockTimer}s`
                ) : (
                    "Entrar"
                )}
            </Button>

            <SocialLogin handleGoogleSignIn={handleGoogleSignIn} />

        </LoginFormStyled>
    );
};