import { StyledGoogleButton } from "./styled";
import GoogleIcon from '@mui/icons-material/Google';
import { signIn } from "next-auth/react";

interface GoogleSignInButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const handleGoogleSignIn = async () => {
    await signIn("google", {
        callbackUrl: '/'
    });
};


export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onClick }) => (
    <StyledGoogleButton
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={handleGoogleSignIn}
    >
        Continuar com Google
    </StyledGoogleButton>
);