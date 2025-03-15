import { StyledGoogleButton } from "./styled";
import GoogleIcon from '@mui/icons-material/Google';

export const GoogleSignInButton = ({ onClick }: { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => (
    <StyledGoogleButton
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={onClick}
    >
        Continuar com Google
    </StyledGoogleButton>
);