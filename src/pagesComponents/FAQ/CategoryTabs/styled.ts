import { styled } from "@mui/material";

export const TabsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  justifyContent: "center",
  marginBottom: "32px",

  "& .category-button": {
    padding: "8px 16px",
    borderRadius: "24px",
    transition: "all 0.3s ease",
    fontSize: "0.95rem",

    "&.active": {
      backgroundColor: "#0D95F9",
      color: "white",
    },

    "&.inactive": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      color: "rgba(255, 255, 255, 0.85)",

      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.12)",
      }
    }
  }
}));