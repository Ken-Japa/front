import { styled } from "@mui/material";

export const CTAContainer = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "48px 24px",
  backgroundColor: "rgba(13, 149, 249, 0.1)",
  borderRadius: "8px",
  backdropFilter: "blur(4px)",

  "& .cta-title": {
    color: "white",
    textAlign: "center",
    marginBottom: "16px",
  },

  "& .cta-description": {
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    maxWidth: "32rem",
    marginBottom: "24px",
    fontSize: "1.25rem",
    lineHeight: 1.6,
  },

  "& .cta-link": {
    color: "#0D95F9",
    textDecoration: "none",
    transition: "opacity 0.3s ease",

    "&:hover": {
      opacity: 0.9,
      textDecoration: "underline",
    },
  },

  [theme.breakpoints.down("sm")]: {
    padding: "32px 16px",
  },
}));
