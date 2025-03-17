import { styled } from "@mui/material";

export const RecursosContainer = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  width: "100%",
  padding: "24px",
  borderRadius: "8px",

  "& .recursos-grid": {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "32px",
    marginBottom: "32px",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
    }
  },

  "& .recurso-item": {
    display: "flex",
    alignItems: "center",
    color: "rgba(255, 255, 255, 0.95)",
    
    "& .icon": {
      color: "#0D95F9",
      marginRight: "8px",
    }
  },

  "& .link-container": {
    textAlign: "center",
  },

  "& .more-link": {
    color: "#0D95F9",
    textDecoration: "none",
    transition: "all 0.3s ease",

    "&:hover": {
      textDecoration: "underline",
    }
  }
}));