"use client";

import { styled } from "@mui/material";

export const HeaderContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  marginBottom: "2rem",
  width: "100%",

  "& .title": {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "white",
    
    [theme.breakpoints.down('sm')]: {
      fontSize: "2rem",
    }
  },

  "& .subtitle": {
    color: "white",
    opacity: 0.9,
    fontSize: "1.1rem",
    fontFamily: '"Roboto Mono", monospace',
    
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem",
    }
  }
}));