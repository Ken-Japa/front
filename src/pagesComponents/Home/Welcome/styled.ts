import { styled } from "@mui/material";

export const SectionWelcome = styled("section")({
  position: "relative",
  minHeight: "100vh",
  width: "100%",
  overflow: "hidden",

  "& .background-image": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    }
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },

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
