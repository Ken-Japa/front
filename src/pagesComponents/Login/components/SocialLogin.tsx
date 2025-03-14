import { Button, Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';

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

            <Button
                variant="outlined"
                fullWidth
                size="large"
                startIcon={<GoogleIcon />}
                onClick={handleGoogleSignIn}
                sx={{
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                }}
            >
                Continuar com Google
            </Button>

            <Typography
                variant="body2"
                className="login-text text-center text-white"
                sx={{ mt: 2 }}
            >
                Ainda não tem uma conta?{' '}
                <Link href="/register" className="text-[#0D95F9] underline hover:opacity-80">
                    Registre-se
                </Link>
            </Typography>
        </>
    );
};