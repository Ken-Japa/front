import { styled, Typography } from "@mui/material";
import { spacing, borderRadius, transitions } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const NavigationContainer = styled("div")({
  "& .navigation-title": {
    color: visitorColors.primary,
    marginBottom: spacing.lg,
    textAlign: "center",
  },

  "& .navigation-content": {
    backgroundColor: visitorColors.backgroundLight,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.xl,
    backdropFilter: visitorColors.blur,
  },

  "& .navigation-grid": {
    display: "grid",
    gap: spacing.md,
    marginBottom: spacing.xl,

    "@media (min-width: 900px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@media (min-width: 1200px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },

  "& .navigation-link": {
    color: visitorColors.textSecondary,
    cursor: "pointer",
    transition: transitions.medium,

    "&:hover": {
      color: visitorColors.primary,
    },
  },
});

export const NavigationTitle = styled(Typography)(({ theme }) => ({
  color: visitorColors.primary,
  textAlign: "center",
  marginBottom: spacing.lg,
  fontSize: "1.25rem",
  fontWeight: "500",
}));
