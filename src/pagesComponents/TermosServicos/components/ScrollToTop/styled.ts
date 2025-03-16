import { styled } from "@mui/material";

export const ScrollButton = styled("button")(({ theme }) => ({
  position: "fixed",
  bottom: "32px",
  right: "32px",
  backgroundColor: "#0D95F9",
  padding: "12px",
  borderRadius: "50%",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  border: "none",
  color: "white",

  "&:hover": {
    backgroundColor: "rgba(13, 149, 249, 0.8)",
    transform: "translateY(-2px)",
  },

  [theme.breakpoints.down("sm")]: {
    bottom: "24px",
    right: "24px",
    padding: "10px",
  },
}));
