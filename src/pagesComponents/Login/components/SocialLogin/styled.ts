import { styled, Button } from "@mui/material";

export const GoogleButton = styled(Button)(({ theme }) => ({
  color: 'white',
  borderColor: 'rgba(255, 255, 255, 0.3)',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
  }
}));

export const RegisterLink = styled('span')(({ theme }) => ({
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    transition: 'opacity 0.3s ease',
    
    '&:hover': {
      opacity: 0.8,
    }
  }
}));