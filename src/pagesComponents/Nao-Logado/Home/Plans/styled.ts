import { Stack, styled } from "@mui/material";
import { spacing, borderRadius, shadows } from '@/theme/variables';

export const SectionPlans = styled("section")(({ theme }) => ({
  width: "100vw",
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "calc(-50vw + 50%)",
  marginRight: "calc(-50vw + 50%)",
  background: "transparent",

  ".plans": {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${spacing.lg} ${spacing.md}`,
    maxWidth: "1920px",
    margin: "0 auto",

    [theme.breakpoints.down("md")]: {
      padding: `${spacing.md} ${spacing.sm}`,
    },
  },
}));

export const CardContainer = styled(Stack)(({ theme }) => ({
  maxWidth: "250px",
  width: "100%",
  padding: spacing.md,
  backgroundColor: "rgba(0,0,0,0.5)",
  boxShadow: shadows.sm,
  borderRadius: borderRadius.sm,
  color: theme.palette.common.white,
  backdropFilter: "blur(8px)",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    margin: "0 auto",
  },
  ul: {
    fontSize: "13px",
    listStyle: "inside",
    li: {
      marginBottom: spacing.xs,
      color: theme.palette.common.white,
    },
  },
}));
