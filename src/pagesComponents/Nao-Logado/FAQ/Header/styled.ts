import { styled } from "@mui/material";
import { spacing, transitions } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const HeaderContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  marginBottom: spacing.xxl,

  "& .header-icon-wrapper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  
  "& .title": {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: visitorColors.primary,
    transition: transitions.medium,
    
    [theme.breakpoints.down('sm')]: {
      fontSize: "2rem",
    }
  },
  
  "& .subtitle": {
    color: visitorColors.textSecondary,
    marginTop: spacing.md,
    fontSize: "1.1rem",
    transition: transitions.medium,
    
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem",
    }
  }
}));