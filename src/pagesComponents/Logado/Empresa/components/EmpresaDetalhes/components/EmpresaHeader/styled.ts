import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Paper,
  Chip,
  Grid,
  Typography,
  Accordion,
  ToggleButton,
} from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  padding: theme.spacing(4),
  backgroundColor: "#1a2234",
  color: "white",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  marginBottom: theme.spacing(4),
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
}));

export const EmpresaSubtitulo = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
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
    color: theme.palette.primary.light,
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
}));

export const ChipsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  margin: theme.spacing(1, 0, 2, 0),
  justifyContent: "center",
}));

export const InfoChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(1),
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  borderColor: "rgba(255, 255, 255, 0.2)",
  color: theme.palette.common.white,
  "& .MuiChip-label": {
    padding: theme.spacing(0, 1),
  },
}));

export const ValorMercadoChip = styled(InfoChip)(({ theme }) => ({
  backgroundColor: "rgba(25, 118, 210, 0.15)",
  borderColor: "rgba(25, 118, 210, 0.5)",
  padding: theme.spacing(1.5),
  "& .MuiChip-label": {
    fontWeight: "bold",
    padding: theme.spacing(0, 2),
  },
}));

export const InfoSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  color: theme.palette.common.white,
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
  "& .MuiDivider-root": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

export const InfoGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const SectionTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "component",
})<{ component?: React.ElementType }>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  fontWeight: 600,
  "& svg": {
    fontSize: 28,
  },
}));

export const ItemList = styled(Box, {
  shouldForwardProp: (prop) => prop !== "component",
})<{ component?: React.ElementType }>(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  marginTop: theme.spacing(1),
  "& li": {
    marginBottom: theme.spacing(0.5),
    lineHeight: 1.6,
    "&::marker": {
      color: theme.palette.primary.light,
    },
  },
}));

export const CustomAccordion = styled(Accordion)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  color: "white",
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionSummary-root": {
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "white",
  },
}));

export const CodigosContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  borderRadius: theme.shape.borderRadius,
}));

export const CodigosTitulo = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  textAlign: "center",
  fontWeight: "bold",
  color: theme.palette.primary.light,
}));

export const CodigoButton = styled(ToggleButton)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1.5, 0),
  justifyContent: "center",
  fontWeight: "normal",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  color: theme.palette.text.primary,
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "8px",
  transition: "all 0.2s ease",
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontWeight: "bold",
  },
  "&:hover": {
    backgroundColor: (props: { selected?: boolean }) =>
      props.selected ? theme.palette.primary.dark : "rgba(255, 255, 255, 0.1)",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
}));
