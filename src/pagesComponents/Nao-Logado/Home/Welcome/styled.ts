import { styled } from "@mui/material";

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
    padding: "80px 0",
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
    marginBottom: "8px",
  },

  "& .title-right": {
    fontSize: "40px",
    fontWeight: "bold",
  },
});
