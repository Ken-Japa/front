"use client";

import { styled } from "@mui/material";

export const SectionPolicy = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  backgroundImage: 'url("/assets/images/background/BACKGROUND-DEFAULT.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  ".opacity": {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "100%",
    height: "100%",
  },
}));
