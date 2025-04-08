import { styled } from "@mui/material";
import { spacing, borderRadius, transitions } from '@/theme/variables';

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
  backgroundColor: "rgba(255, 255, 255, 0.06)",
  padding: spacing.lg,
  borderRadius: borderRadius.md,
  transition: transitions.medium,

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    transform: "scale(1.05)",
  },

  "& h3": {
    fontSize: "1.25rem",
    marginBottom: spacing.sm,
    color: "#64FFDA",
  },

  "& p": {
    color: "white",
  }
});