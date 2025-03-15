import { styled, FormControlLabel, Link } from "@mui/material";

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiCheckbox-root": {
    color: 'rgba(255,255,255,0.9)',
    '&.Mui-checked': {
      color: theme.palette.primary.main
    }
  },
  
  "& .MuiTypography-root": {
    color: 'rgba(255,255,255,0.9)',
    fontSize: '0.875rem',
  }
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'underline',
  transition: 'opacity 0.3s ease',
  
  '&:hover': {
    opacity: 0.9,
  }
}));