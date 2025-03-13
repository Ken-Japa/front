"use client";

import { styled } from "@mui/material";

export const SectionTeam = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  position: "relative",

  "& .background-image": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },

  "& .opacity": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
  },

  "& .content": {
    position: "relative",
    zIndex: 2,
  },
}));
