import { styled } from "@mui/material";
import { spacing } from '@/theme/variables';
import { COLORS } from '../../styled';

export const HeaderContainer = styled("div")({
  textAlign: "center",
  position: "relative",
  
  "& .title": {
    fontSize: "3rem",
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: spacing.xl,
  }
});