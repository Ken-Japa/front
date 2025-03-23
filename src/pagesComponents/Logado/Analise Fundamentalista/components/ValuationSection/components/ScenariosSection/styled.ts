import { Box, styled } from "@mui/material";

export const SensitivityContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: "rgba(13, 149, 249, 0.08)",
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(3),
  allignItems: "center",
  textAlign: "center",
}));
