"use client";

import { Dialog, styled } from "@mui/material";

export const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    minHeight: "80vh",
    position: "relative",
    margin: "32px",
    width: "100%",
    overflow: "hidden",

    "& .background-image": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
    },

    "& .content": {
      position: "relative",
      zIndex: 2,
      height: "100%",
      width: "100%",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(1px)",
      zIndex: 1,
    },
  },
  "& .MuiDialog-container": {
    height: "100%",
  },
});

export const RegisterForm = styled("form")({
  position: "relative",
  width: "100%",
  maxWidth: "400px",
  padding: "40px",
  margin: "0 auto",
  "& .divider-container": {
    display: "flex",
    alignItems: "center",
    margin: "32px 0",
    "& .divider": {
      flex: 1,
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    },
    "& .divider-text": {
      margin: "0 16px",
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
  "& .login-text": {
    marginTop: "32px",
    fontFamily: '"Roboto Mono", monospace',
    letterSpacing: "0.5px",
  },
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
    "& .MuiFormHelperText-root": {
      color: "#f44336",
      marginLeft: 0
    },
  },
});
