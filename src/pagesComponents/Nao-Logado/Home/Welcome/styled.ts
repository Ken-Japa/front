import { styled } from "@mui/material";
import { spacing } from '@/theme/variables';

export const SectionWelcome = styled("section")({
  position: "relative",
  minHeight: "100vh",
  width: "100%",
  overflow: "hidden",
  background: "transparent",

  "& .home": {
    position: "relative",
    zIndex: 2,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: `${spacing.xxl} 0`,
  },

  "& .content-container": {
    width: "100%",
  },

  "& .welcome": {
    width: "100%",
    textAlign: "center",
    marginBottom: "164px",
  },

  "& .title-left": {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: spacing.sm,
  },

  "& .title-right": {
    fontSize: "40px",
    fontWeight: "bold",
  },
});
