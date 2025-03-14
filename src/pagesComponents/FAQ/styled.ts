import { styled } from "@mui/material/styles";

export const SectionFAQ = styled("section")(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  padding: "2rem 0",
  backgroundColor: "rgba(0, 0, 0, 0.4)",

  "& .background-image": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },

  "& .content-container": {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 24px",

    [theme.breakpoints.down("sm")]: {
      padding: "24px 16px",
    },
  },
}));
