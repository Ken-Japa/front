import { styled } from "@mui/material";
import { Box } from "@mui/material";

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "48px",

  "& .header-content": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "24px",
  },

  "& .title": {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#0D95F9",
    
    [theme.breakpoints.down('sm')]: {
      fontSize: "2rem",
    }
  },

  "& .subtitle": {
    color: "white",
    marginBottom: "8px",
  },

  "& .description": {
    color: "rgba(255, 255, 255, 0.9)",
    maxWidth: "600px",
    margin: "16px auto 0",
    lineHeight: 1.6,
  }
}));