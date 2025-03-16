import { styled, IconButton } from "@mui/material";

export const StyledCloseButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  right: 'calc(50% - 450px)',
  top: theme.spacing(5),
  color: 'white',
  zIndex: 1300,
  transition: 'all 0.3s ease',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  margin: theme.spacing(1),
  padding: theme.spacing(1),
  
  '&:hover': {
    opacity: 0.8,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  [theme.breakpoints.down('md')]: {
    right: theme.spacing(2),
    top: theme.spacing(2),
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.5),
  }
}));