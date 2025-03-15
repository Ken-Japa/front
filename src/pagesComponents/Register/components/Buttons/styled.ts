import { styled, Button } from "@mui/material";

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  }
}));

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