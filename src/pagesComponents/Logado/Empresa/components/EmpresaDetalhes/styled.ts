import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import React from "react";

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
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}
