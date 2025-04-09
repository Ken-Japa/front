import { styled } from "@mui/material";
import { spacing } from '@/theme/variables';
import { visitorColors } from "@/theme/palette/visitor";

export const HeaderContainer = styled("div")({
  textAlign: "center",
  position: "relative",
  
  "& .title": {
    fontSize: "3rem",
    fontWeight: "bold",
    color: visitorColors.primary,
    marginBottom: spacing.xl,
  }
});