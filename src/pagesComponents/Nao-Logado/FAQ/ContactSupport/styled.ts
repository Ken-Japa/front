import { styled } from "@mui/material";
import { spacing, borderRadius, transitions } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const SupportContainer = styled("div")({
  marginTop: spacing.xxl,
  textAlign: "center",
  backgroundColor: visitorColors.backgroundLight,
  padding: spacing.xl,
  borderRadius: borderRadius.md,
  width: "100%",
  transition: transitions.medium,
  
  "&:hover": {
    backgroundColor: visitorColors.backgroundMedium,
  },

  "& .support-title": {
    fontSize: "1.25rem",
    color: visitorColors.primary,
    marginBottom: spacing.md,
  },
  
  "& .support-text": {
    color: visitorColors.textSecondary,
    marginBottom: spacing.lg,
  }
});