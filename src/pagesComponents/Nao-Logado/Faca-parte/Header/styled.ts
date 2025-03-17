import { styled } from "@mui/material";

export const HeaderContainer = styled("div")(({ theme }) => ({
  "& .header-content": {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px",
    
    [theme.breakpoints.down('md')]: {
      justifyContent: "center",
    }
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
    color: "rgba(255, 255, 255, 0.95)",
    marginBottom: "32px",
    
    [theme.breakpoints.down('md')]: {
      textAlign: "center",
    }
  }
}));