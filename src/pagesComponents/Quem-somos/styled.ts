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
    zIndex: -1,
  },

  "& .opacity": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 0,
  },

  "& .content": {
    position: "relative",
    zIndex: 1,
  },
}));

export const BaseSection = styled("section")(({ theme }) => ({
  maxWidth: "64rem", // 5xl in tailwind
  width: "100%",
  textAlign: "center",
  transform: "scale(1)",
  transition: "all 0.3s ease",

  "&:hover": {
    transform: "scale(1.05)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0 16px",
  },
}));

export const SectionTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  marginBottom: "16px",
});
