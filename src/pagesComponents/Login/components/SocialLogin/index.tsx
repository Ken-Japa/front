import GoogleIcon from '@mui/icons-material/Google';
import { Typography } from "@mui/material";
import Link from 'next/link';
import { GoogleButton, RegisterLink } from './styled';

interface SocialLoginProps {
    handleGoogleSignIn: () => void;
}

export const SocialLogin = ({ handleGoogleSignIn }: SocialLoginProps) => {
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

            <Typography className="login-text">
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