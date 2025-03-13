"use client";

import { styled } from "@mui/material";
import theme from "@/theme/mui";

export const SectionWelcome = styled("section")({
  backgroundImage: 'url("/assets/images/background/HOME.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  width: "100%",
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  "& .home": {
    position: "relative",
    zIndex: 1,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: "80px 0", // Increased top padding
  },

  "& .welcome": {
    width: "100%",
    textAlign: "center",
    marginBottom: "164px",
  },

  "& .title-left": {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  },

  "& .title-right": {
    fontSize: "40px",
    fontWeight: "bold",
  },
});
