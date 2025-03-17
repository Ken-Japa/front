import { styled, Button } from "@mui/material";

export const StyledGoogleButton = styled(Button)(({ theme }) => ({
  color: 'white',
  borderColor: 'rgba(255, 255, 255, 0.5)',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.15)'
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
  }
}));