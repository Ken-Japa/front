import { StyledGoogleButton } from "./styled";
import GoogleIcon from '@mui/icons-material/Google';
import { signIn } from "next-auth/react";

const handleGoogleSignIn = async () => {
    await signIn("google", {
        callbackUrl: '/'
    });
};


export const GoogleSignInButton = () => (
    <StyledGoogleButton
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={handleGoogleSignIn}
    >
        Continuar com Google
    </StyledGoogleButton>
);