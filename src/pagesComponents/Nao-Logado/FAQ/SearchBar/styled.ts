import { styled } from "@mui/material";
import { spacing, borderRadius, transitions } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const SearchContainer = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
  "& .search-wrapper": {
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    marginBottom: spacing.xl,
  },
  
  "& .search-input": {
    width: "100%",
    padding: `${spacing.sm} ${spacing.xl}`,
    backgroundColor: visitorColors.backgroundLight,
    color: visitorColors.text,
    border: `1px solid ${visitorColors.divider}`,
    borderRadius: borderRadius.md,
    outline: "none",
    transition: transitions.medium,
    "&:focus": {
      borderColor: visitorColors.primary,
      backgroundColor: visitorColors.backgroundMedium,
    }
  },
  
  "& .search-icon": {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: spacing.sm,
    color: visitorColors.textSecondary,
  },
  
  "& .clear-button": {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: spacing.sm,
    color: visitorColors.textSecondary,
    cursor: "pointer",
    transition: transitions.medium,
    "&:hover": {
      color: visitorColors.text,
    }
  }
});