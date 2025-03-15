import { styled } from "@mui/material";

export const LogoContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.2s ease-in-out',
    '&:hover': {
        opacity: 0.9
    }
});