import { styled } from "@mui/material";
import { visitorColors } from "@/theme/palette/visitor";

export const SectionSolutions = styled("section")({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflowX: "hidden",

  "& .video-background": {
    position: "fixed !important",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -3,
  },

  "& .video-overlay": {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: visitorColors.overlayG,
    zIndex: -2,
  },

  "& .image-overlay": {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: -2,
  },

  "& .overlay": {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.2)",
    zIndex: -1,
  },
});

export const ContentWrapper = styled("div")({
  position: "relative",
  zIndex: 1,
  paddingBottom: "80px",
  width: "100%",
});
