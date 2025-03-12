import { styled } from "@mui/material";

export const LinkNavbar = styled('a')(({ theme }) => ({    
    border: '1px solid transparent',
    padding: '4px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    ':hover': {
        border: `1px solid ${theme.palette.primary.main}`,
        boxShadow: `1px 1px 6px ${theme.palette.primary.main}`,
        color: theme.palette.primary.main
    }
}));