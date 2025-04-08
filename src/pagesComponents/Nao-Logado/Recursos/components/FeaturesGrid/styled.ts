import { styled } from "@mui/material";

export const FeaturesContainer = styled("div")({
  width: "100%",
  marginTop: "40px",
  marginBottom: "40px",
});

export const FeatureCard = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(13, 149, 249, 0.09) 100%)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  borderRadius: "16px",
  padding: "32px",
  height: "auto",
  minHeight: "280px",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",

  "&:hover": {
    background:
      "linear-gradient(145deg, rgba(255, 255, 255, 0.09) 0%, rgba(13, 149, 249, 0.1) 100%)",
    borderColor: "rgba(13, 149, 249, 0.3)",
    boxShadow: "0 8px 32px rgba(13, 149, 249, 0.1)",
    "& .feature-details": {
      maxHeight: "500px",
      opacity: 1,
    },
  },

  "& .feature-title": {
    color: "#0D95F9",
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "16px",
  },

  "& .feature-description": {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "1rem",
    lineHeight: 1.6,
    marginBottom: "16px",
  },

  "& .feature-details": {
    maxHeight: 0,
    opacity: 0,
    overflow: "hidden",
    transition: "all 0.3s ease",
    marginTop: "16px",

    "& ul": {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },

    "& li": {
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "rgba(255, 255, 255, 0.8)",

      "&::before": {
        content: '"•"',
        color: "#0D95F9",
      },
    },
  },

  "&.dimmed": {
    opacity: 0.5,
  },

  "&:hover .feature-details": {
    opacity: 1,
  },

  [theme.breakpoints.down("sm")]: {
    "& .feature-details": {
      padding: "24px",
    },
  },
}));
