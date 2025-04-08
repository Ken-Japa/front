import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  padding: theme.spacing(4),
  backgroundColor: theme.palette.mode === 'dark' ? "#1a2234" : "#f5f8fa",
  color: theme.palette.mode === 'dark' ? "white" : theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  marginBottom: theme.spacing(4),
  boxShadow: theme.shadows[2],
}));

export const EmpresaInfo = styled(Box)(({ theme }) => ({
  flex: "1 1 auto",
  maxWidth: "100%",
}));

export const EmpresaTitulo = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "component",
})<{ component?: React.ElementType }>(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: 600,
  color: theme.palette.mode === 'dark' ? "white" : theme.palette.text.primary,
}));

export const EmpresaSubtitulo = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.mode === 'dark' 
    ? theme.palette.text.secondary 
    : theme.palette.text.secondary,
}));

export const SiteLink = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  marginBottom: theme.spacing(3),
  "& a": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export const EmpresaDescricao = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
  color: theme.palette.mode === 'dark' ? "white" : theme.palette.text.primary,
}));
