import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Tab, Tabs } from "@mui/material";

export const EmpresaContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundImage: `url(${
    theme.palette.mode === "dark"
      ? "/assets/images/background/Empresa-Individual-Dark.jpg"
      : "/assets/images/background/Empresa-Individual-Light.jpg"
  })`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  marginTop: -64,
  paddingTop: 64,
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  margin: "0 auto",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(18, 24, 38, 0.85)"
      : "rgba(255, 255, 255, 0.85)",
  borderRadius: theme.shape.borderRadius,
  backdropFilter: "blur(8px)",
  boxShadow: theme.shadows[4],
  padding: theme.spacing(3),
  transition: theme.transitions.create(['background-color', 'box-shadow'], {
    duration: theme.transitions.duration.standard,
  }),
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginTop: theme.spacing(3),
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.primary.main,
    height: 3,
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(16),
  marginRight: theme.spacing(4),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color', {
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-selected": {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: theme.palette.action.selected,
  },
  "&:hover": {
    color: theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}
