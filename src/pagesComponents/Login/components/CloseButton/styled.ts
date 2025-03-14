import { styled, IconButton } from "@mui/material";

export const StyledCloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: 'white',
  zIndex: 10,
  transition: 'opacity 0.3s ease',
  
  '&:hover': {
    opacity: 0.8,
  },

  [theme.breakpoints.down('sm')]: {
    right: theme.spacing(0.5),
    top: theme.spacing(0.5),
  }
}));