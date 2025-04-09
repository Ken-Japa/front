import { styled } from "@mui/material";
import { spacing, borderRadius } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const SectionJoinTeam = styled("section")({
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& .background-image": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },

  "& .container": {
    position: "relative",
    zIndex: 1,
    backgroundColor: visitorColors.backgroundOverlay,
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${spacing.xl} ${spacing.md}`,

    "@media (max-width: 600px)": {
      padding: `${spacing.lg} ${spacing.sm}`,
    },
  },

  "& .content-wrapper": {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
  },
});
