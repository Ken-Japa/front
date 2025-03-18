import GoogleIcon from '@mui/icons-material/Google';
import { Typography } from "@mui/material";
import Link from 'next/link';
import { GoogleButton, RegisterLink } from './styled';
import { SocialLoginSkeleton } from "./SocialLoginSkeleton";

interface SocialLoginProps {
    handleGoogleSignIn: () => void;
    isLoading?: boolean;
}

export const SocialLogin = ({ handleGoogleSignIn, isLoading }: SocialLoginProps) => {
    if (isLoading) {
        return <SocialLoginSkeleton />;
    }
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
                onClick={handleGoogleSignIn}
            >
                Continuar com Google
            </GoogleButton>

            <Typography className="login-text text-white">
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