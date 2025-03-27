import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

export const BackgroundContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  marginTop: "-64px",
  paddingTop: "64px",
  backgroundImage:
    theme.palette.mode === "dark"
      ? 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url("/assets/images/background/VisaoEconomia-Dark.jpg")'
      : 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url("/assets/images/background/VisaoEconomia-Light.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  position: "relative",
}));

export const DashboardItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  height: "100%",
  background:
    theme.palette.mode === "dark"
      ? "rgba(19, 47, 76, 0.4)"
      : "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)"
  }`,
}));
