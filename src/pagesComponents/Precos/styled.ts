"use client";

import { styled } from "@mui/material";
import { Stack } from "@mui/material";

export const SectionPricing = styled("section")(({ theme }) => ({
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
    position: "relative",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  }
}));

export const BaseSection = styled("section")(({ theme }) => ({
  padding: "64px 24px",
  
  [theme.breakpoints.down("sm")]: {
    padding: "40px 16px",
  }
}));

export const ContentWrapper = styled(Stack)({
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%"
});
