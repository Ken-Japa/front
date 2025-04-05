import { styled, Box, Typography, Divider, Button, alpha } from "@mui/material";
import { CustomButton } from "@/components/Custom/Button";

export const InfoContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const InfoRow = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 0),
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  justifyContent: "space-between"
}));

export const InfoLabel = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === "dark" ? theme.palette.text.secondary : "#6B7280",
  fontWeight: 500,
  fontSize: "0.9rem",
  marginBottom: theme.spacing(1),
  width: "100%"
}));

export const InfoValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.text.primary : "#1F2937",
  fontWeight: 500,
  fontSize: "1rem",
  flexGrow: 1
}));

export const EditButton = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  padding: "4px 8px",
  // Ensure text is visible in both light and dark themes
  color:
    theme.palette.mode === "light"
      ? theme.palette.primary.main // Use primary color in light mode
      : theme.palette.primary.light, // Use lighter primary color in dark mode
  border: `1px solid ${theme.palette.primary.main}`,
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? alpha(theme.palette.primary.main, 0.1)
        : alpha(theme.palette.primary.light, 0.1),
  },
}));

export const PasswordButton = styled(CustomButton)(({ theme }) => ({
  marginTop: theme.spacing(3),
  borderRadius: "4px",
  padding: theme.spacing(1, 2),
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)",
}));
