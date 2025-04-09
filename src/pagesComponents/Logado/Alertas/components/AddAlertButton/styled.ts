import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { transitions } from "@/theme/variables";

export const StyledAddButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  transition: transitions.medium,
  
  "&:hover": {
    backgroundColor: theme.palette.primary.A200,
  }
}));