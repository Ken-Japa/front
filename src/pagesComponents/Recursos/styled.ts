import { styled } from "@mui/material";

export const SectionSolutions = styled("section")(({ theme }) => ({
  background: "linear-gradient(180deg, #000000 0%, #001529 100%)",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at center, rgba(13, 149, 249, 0.1) 0%, transparent 70%)",
    pointerEvents: "none",
  }
}));

export const ContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "64px",
  padding: "64px 0",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    gap: "48px",
    padding: "48px 0",
  }
}));

export const FeatureCard = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  borderRadius: "16px",
  padding: "32px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderColor: "rgba(13, 149, 249, 0.3)",
    boxShadow: "0 8px 32px rgba(13, 149, 249, 0.1)",
  },

  "& .icon-container": {
    backgroundColor: "rgba(13, 149, 249, 0.1)",
    width: "64px",
    height: "64px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "24px",
    transition: "transform 0.3s ease",

    "&:hover": {
      transform: "translateY(-5px)",
    }
  },

  [theme.breakpoints.down("sm")]: {
    padding: "24px",

    "& .icon-container": {
      width: "48px",
      height: "48px",
    }
  }
}));