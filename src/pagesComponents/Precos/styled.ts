"use client";

import { styled } from "@mui/material";

export const SectionPricing = styled("section")({
  minHeight: "100vh",
  width: "100%",
  backgroundImage: 'url("/assets/images/background/PLANS.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
  "& .opacity": {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
