import { styled } from "@mui/material/styles";
import { Box, Paper, Typography } from "@mui/material";
import { transitions } from "@/theme/variables";

export const ConfiguracoesWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  width: "100%",
  "&::before": {
    content: '""',
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      theme.palette.mode === "dark"
        ? 'url("/assets/images/background/Configuracoes-Dark.jpg")'
        : 'url("/assets/images/background/Configuracoes-Light.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center right",
    opacity: theme.palette.mode === "dark" ? 0.3 : 0.4,
    zIndex: -1,
    transition: transitions.medium,
  },
}));

export const SettingsTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(4),
  color: theme.palette.text.primary,
  fontWeight: 600,
}));

export const SettingsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.mode === "dark" 
    ? theme.palette.background.paper 
    : theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  transition: transitions.medium,
}));

export const SettingsSectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

export const SettingsSectionIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: theme.palette.primary.main,
}));

export const SettingsSectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
}));

export const SettingsControlContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const SliderContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  "&:last-child": {
    marginBottom: 0,
  },
}));

export const SliderLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
}));

export const SliderDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
}));
