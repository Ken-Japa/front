import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

interface GoogleSignInButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const GoogleSignInButton = ({ onClick }: GoogleSignInButtonProps) => (
    <Button
        variant="outlined"
        fullWidth
        size="large"
        startIcon={<GoogleIcon />}
        onClick={onClick}
        sx={{
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.15)'
            }
        }}
    >
        Continuar com Google
    </Button>
);