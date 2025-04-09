import { styled } from "@mui/material";
import { spacing } from "@/theme/variables";
import { visitorColors } from "@/theme/palette/visitor";

export const SectionPolicy = styled("section")({
  width: "100%",
  minHeight: "100vh",
  position: "relative",
  display: "flex",
  flexDirection: "column",

  "& .background-image": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },

  "& .opacity": {
    position: "relative",
    zIndex: 1,
    backgroundColor: visitorColors.backgroundOverlay,
    backdropFilter: visitorColors.blur,
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  "& .section-privacy": {
    padding: `${spacing.xl} 0`,
    position: "relative",
    flex: 1,

    "@media (max-width: 600px)": {
      padding: `${spacing.lg} 0`,
    },
  },
});
