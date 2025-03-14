import { styled } from "@mui/material";

export const BenefitsContainer = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.07)",
  padding: "24px",
  borderRadius: "8px",
  backdropFilter: "blur(10px)",

  "& .benefits-title": {
    color: "#0D95F9",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  "& .benefits-grid": {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  "& .benefit-chip": {
    backgroundColor: "rgba(13, 149, 249, 0.15)",
    color: "white",
    transition: "background-color 0.2s",

    "&:hover": {
      backgroundColor: "rgba(13, 149, 249, 0.25)",
    }
  }
}));