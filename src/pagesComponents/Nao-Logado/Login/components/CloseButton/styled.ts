import { styled, IconButton } from "@mui/material";

export const StyledCloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(3),
  top: theme.spacing(3),
  color: 'white',
  zIndex: 10,
  transition: 'all 0.3s ease',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  
  '&:hover': {
    opacity: 0.8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  [theme.breakpoints.down('sm')]: {
    right: theme.spacing(2),
    top: theme.spacing(2),
  }
}));