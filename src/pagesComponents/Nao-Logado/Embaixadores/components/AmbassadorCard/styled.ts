import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CARD_STYLES = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(8px)',
    borderRadius: '8px',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
        borderColor: 'rgba(255, 215, 0, 0.3)'
    }
} as const;

export const CardContainer = styled(Box)(CARD_STYLES);