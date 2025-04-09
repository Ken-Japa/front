import { styled } from "@mui/material";
import { spacing, borderRadius, transitions } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const TabsContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: spacing.sm,
  justifyContent: "center",
  marginBottom: spacing.xl,

  "& .category-button": {
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: borderRadius.md,
    transition: transitions.medium,
    fontSize: "0.95rem",

    "&.active": {
      backgroundColor: visitorColors.primary,
      color: visitorColors.text,
    },

    "&.inactive": {
      backgroundColor: visitorColors.backgroundLight,
      color: visitorColors.textSecondary,
      "&:hover": {
        backgroundColor: visitorColors.backgroundMedium,
      },
    },
  },
});
