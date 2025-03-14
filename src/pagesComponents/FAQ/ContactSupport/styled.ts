import { styled } from "@mui/material";

export const SupportContainer = styled("div")(({ theme }) => ({
  marginTop: "48px",
  textAlign: "center",
  backgroundColor: "rgba(255, 255, 255, 0.06)",
  padding: "32px",
  borderRadius: "8px",
  width: "100%",

  "& .support-title": {
    fontSize: "1.25rem",
    color: "#0D95F9",
    marginBottom: "16px",
  },

  "& .support-text": {
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "24px",
  },

  "& .support-button": {
    padding: "10px 24px",
    backgroundColor: "#0D95F9",
    color: "white",
    borderRadius: "8px",
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "rgba(13, 149, 249, 0.9)",
    }
  }
}));