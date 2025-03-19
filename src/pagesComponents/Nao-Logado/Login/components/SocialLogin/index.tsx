import Link from 'next/link';

import GoogleIcon from '@mui/icons-material/Google';
import { Typography } from "@mui/material";

import { GoogleButton, RegisterLink } from './styled';
import { SocialLoginSkeleton } from "./SocialLoginSkeleton";

interface SocialLoginProps {
    handleGoogleSignIn: () => Promise<void>;
    isLoading?: boolean;
}

export const SocialLogin = ({ handleGoogleSignIn, isLoading }: SocialLoginProps) => {
    if (isLoading) {
        return <SocialLoginSkeleton />;
    }

    const handleGoogleClick = async () => {
        try {
            await handleGoogleSignIn();
        } catch (error) {
            console.error('Failed to sign in with Google:', error);
        }
    };

    return (
        <>
            <div className="divider-container">
                <div className="divider" />
                <span className="divider-text">ou</span>
                <div className="divider" />
            </div>

            <GoogleButton
                variant="outlined"
                fullWidth
                size="large"
                startIcon={<GoogleIcon />}
                onClick={handleGoogleClick}
                aria-label="Continuar com Google"
            >
                Continuar com Google
            </GoogleButton>

            <Typography 
                component="p" 
                className="login-text text-white"
                variant="body1"
            >
                Não tem uma conta?{' '}
                <RegisterLink>
                    <Link href="/register">
                        Registre-se
                    </Link>
                </RegisterLink>
            </Typography>
        </>
    );
};