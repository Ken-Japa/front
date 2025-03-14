"use client";

import { Stack, styled } from "@mui/material";

export const InfoContainer = styled(Stack)(({ theme }) => ({
  flex: "0 0 350px",

  "& .info-item": {
    marginBottom: "24px",
    color: "#0D95F9",
    
    "&:last-child": {
      marginBottom: 0,
    }
  },

  "& .info-header": {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  },

  "& .info-icon": {
    color: "#0D95F9",
    marginRight: "12px",
    fontSize: "1.5rem",
  },

  "& .info-title": {
    color: "white",
    fontSize: "1.25rem",
    fontWeight: 500,
  },

  "& .info-content": {
    color: "white",
    opacity: 0.9,
    fontSize: "1rem",
  }
}));