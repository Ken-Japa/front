import { styled } from "@mui/material";

export const NavigationContainer = styled("div")(({ theme }) => ({
  "& .navigation-title": {
    color: "#0D95F9",
    marginBottom: "16px",
    textAlign: "center",
  },

  "& .navigation-content": {
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    padding: "24px",
    borderRadius: "8px",
    marginBottom: "48px",
    backdropFilter: "blur(8px)",
  },

  "& .navigation-grid": {
    display: "grid",
    gap: "16px",

    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    }
  },

  "& .navigation-link": {
    color: "rgba(255, 255, 255, 0.85)",
    cursor: "pointer",
    transition: "color 0.3s ease",

    "&:hover": {
      color: "#0D95F9",
    }
  }
}));