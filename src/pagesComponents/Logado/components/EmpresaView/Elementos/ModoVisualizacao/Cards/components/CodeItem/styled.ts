import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { transitions } from "@/theme/variables";

export const CodeText = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  fontWeight: "bold",
  transition: transitions.medium,
  color: theme.palette.mode === "dark" 
    ? "#ffffff" 
    : theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const CodeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  width: "100%",
}));

export const PriceText = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  color: theme.palette.mode === "dark" 
    ? "rgba(255, 255, 255, 0.8)" 
    : theme.palette.text.secondary,
}));

export const VariationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: theme.spacing(1),
}));

export const VariationText = styled(Typography)<{ isPositive: boolean; isZero?: boolean }>(
  ({ theme, isPositive, isZero }) => ({
    color: isZero 
      ? theme.palette.text.secondary
      : isPositive 
        ? theme.palette.success.main 
        : theme.palette.error.main,
    fontWeight: "bold",
  })
);
