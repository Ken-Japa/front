"use client";

import { styled } from "@mui/material";

export const SectionContact = styled("section")({
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
    position: "relative",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    minHeight: "100vh",
    display: "flex",
    paddingTop: "64px",
    justifyContent: "center",
  },
});

export const ContactForm = styled("form")({
  width: "100%",
  maxWidth: "600px",
  padding: "40px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "8px",
  backdropFilter: "blur(10px)",
  "& .MuiTextField-root": {
    marginBottom: "16px",
  },
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.23)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
  },
});
