import { styled } from "@mui/material/styles";

export const SectionPolicy = styled("section")(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  position: "relative",

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
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: "100%",
    minHeight: "100vh",
  },

  "& .section-privacy": {
    padding: "64px 24px",

    [theme.breakpoints.down("sm")]: {
      padding: "32px 16px",
    },
  },
}));
