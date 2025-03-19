import { type MouseEvent } from 'react';
import { signIn } from "next-auth/react";

import GoogleIcon from '@mui/icons-material/Google';

import { StyledGoogleButton } from "./styled";

interface GoogleSignInButtonProps {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const GoogleSignInButton = ({ onClick }: GoogleSignInButtonProps) => {
    const handleGoogleSignIn = async () => {
        try {
            await signIn("google", {
                callbackUrl: '/'
            });
        } catch (error) {
            console.error('Failed to sign in with Google:', error);
        }
    };

    return (
        <StyledGoogleButton
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            onClick={handleGoogleSignIn}
            aria-label="Continuar com Google"
        >
            Continuar com Google
        </StyledGoogleButton>
    );
};