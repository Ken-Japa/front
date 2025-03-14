import { styled } from "@mui/material";

export const HeaderContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  marginBottom: "48px",

  "& .header-icon-container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "24px",
  },

  "& .header-subtitle": {
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "8px",
  },

  "& .header-description": {
    color: "rgba(255, 255, 255, 0.8)",
    maxWidth: "32rem",
    margin: "16px auto 0",
    textAlign: "center",
  },

  [theme.breakpoints.down("sm")]: {
    marginBottom: "32px",
  }
}));