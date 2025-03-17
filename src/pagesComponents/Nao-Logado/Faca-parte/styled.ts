import { styled } from "@mui/material";

export const SectionJoinTeam = styled("section")(({ theme }) => ({
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "64px 24px",

    [theme.breakpoints.down("sm")]: {
      padding: "32px 16px",
    },
  },

  "& .content-wrapper": {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
  },
}));
