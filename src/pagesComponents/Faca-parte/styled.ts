import { styled } from "@mui/material";

export const SectionJoinTeam = styled("section")({
  minHeight: "100vh",
  width: "100%",
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
    zIndex: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "64px 0",
  },
});
