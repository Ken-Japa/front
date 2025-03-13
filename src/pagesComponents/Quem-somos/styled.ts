"use client";

import { styled } from "@mui/material";

export const SectionTeam = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  backgroundImage: 'url("/assets/images/background/Quem-Somos.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
  "& .opacity": {
    position: "absolute", // Changed from fixed to absolute
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Reduced opacity from 0.85 to 0.75
    zIndex: 1,
  },
  "& .content": {
    position: "relative",
    zIndex: 2,
  },
}));
