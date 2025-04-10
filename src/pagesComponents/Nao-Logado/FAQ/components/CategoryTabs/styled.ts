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
    border: "none",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 500,

    "&.active": {
      backgroundColor: visitorColors.primary,
      color: "#000",
    },

    "&.inactive": {
      backgroundColor: visitorColors.backgroundLight,
      color: visitorColors.text,

      "&:hover": {
        backgroundColor: visitorColors.backgroundMedium,
      },
    },
  },
});
