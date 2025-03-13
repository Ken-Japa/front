"use client";

import { styled } from "@mui/material";

export const SectionPolicy = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",

  "& .background-image": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },

  ".opacity": {
    position: "relative",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100%",
  },
}));
