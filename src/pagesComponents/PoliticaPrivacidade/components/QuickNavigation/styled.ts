import { styled } from "@mui/material";
import { Box, Typography } from "@mui/material";

export const NavigationTitle = styled(Typography)(({ theme }) => ({
  color: "#0D95F9",
  textAlign: "center",
  marginBottom: "24px",
  fontSize: "1.25rem",
  fontWeight: "500"
}));

export const NavigationContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.06)",
  padding: "24px",
  borderRadius: "8px",
  marginBottom: "48px",
  backdropFilter: "blur(10px)",

  "& .navigation-grid": {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: "1fr",
    }
  },

  "& .nav-link": {
    color: "rgba(255, 255, 255, 0.85)",
    transition: "color 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",

    "&:hover": {
      color: "#0D95F9",
    }
  }
}));