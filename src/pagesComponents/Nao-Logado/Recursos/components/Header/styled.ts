import { styled } from "@mui/material";

export const HeaderContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  maxWidth: "48rem",
  margin: "0 auto",
  marginTop: "16px",

  "& .header-title": {
    color: "white",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "16px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },

  "& .header-subtitle": {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "1.25rem",
    maxWidth: "48rem",
    margin: "0 auto",
    lineHeight: 1.6,

    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));
