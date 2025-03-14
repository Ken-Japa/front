import { styled } from "@mui/material";

export const SectionTermsServices = styled("section")(({ theme }) => ({
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

  "& .opacity-layer": {
    position: "relative",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(8px)",
    width: "100%",
    minHeight: "100vh",
  },

  "& .content-wrapper": {
    padding: "64px 0",

    [theme.breakpoints.down("sm")]: {
      padding: "32px 0",
    },
  },
}));
