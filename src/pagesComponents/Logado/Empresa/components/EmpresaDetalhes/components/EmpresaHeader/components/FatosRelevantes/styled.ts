import { styled } from "@mui/material/styles";
import { Box, Paper, Typography } from "@mui/material";

export const InfoSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === 'dark' 
    ? "rgba(255, 255, 255, 0.05)" 
    : theme.palette.background.paper,
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? "rgba(255, 255, 255, 0.1)" 
    : theme.palette.divider}`,
  color: theme.palette.mode === 'dark' 
    ? theme.palette.common.white 
    : theme.palette.text.primary,
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: theme.palette.mode === 'dark'
      ? "0 6px 12px rgba(0, 0, 0, 0.15)"
      : theme.shadows[3],
  },
  "& .MuiDivider-root": {
    backgroundColor: theme.palette.mode === 'dark'
      ? "rgba(255, 255, 255, 0.1)"
      : theme.palette.divider,
  },
}));

export const SectionTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "component",
})<{ component?: React.ElementType }>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  fontWeight: 600,
  color: theme.palette.mode === 'dark'
    ? theme.palette.common.white
    : theme.palette.text.primary,
  "& svg": {
    fontSize: 28,
    color: theme.palette.primary.main,
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
    color: theme.palette.mode === 'dark'
      ? theme.palette.common.white
      : theme.palette.text.primary,
    "&::marker": {
      color: theme.palette.primary.main,
    },
  },
}));
