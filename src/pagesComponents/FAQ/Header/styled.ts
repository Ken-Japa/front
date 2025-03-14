import { styled } from "@mui/material";

export const HeaderContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  marginBottom: "48px",

  "& .header-icon-wrapper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "16px",
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
    color: "rgba(255, 255, 255, 0.9)",
    marginTop: "16px",
    fontSize: "1.1rem",
    
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem",
    }
  }
}));