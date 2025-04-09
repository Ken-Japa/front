import { styled } from "@mui/material";
import { spacing, borderRadius, transitions } from '@/theme/variables';
import { visitorColors } from "@/theme/palette/visitor";

export const ValoresGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: spacing.xl,

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  }
}));

export const ValorCard = styled("div")({
  textAlign: "center",
  backgroundColor: visitorColors.backgroundLight,
  padding: spacing.lg,
  borderRadius: borderRadius.md,
  transition: transitions.medium,

  "&:hover": {
    backgroundColor: visitorColors.backgroundMedium,
    transform: "scale(1.05)",
  },

  "& h3": {
    fontSize: "1.25rem",
    marginBottom: spacing.sm,
    color: visitorColors.highlight,
  },

  "& p": {
    color: visitorColors.text,
  }
});