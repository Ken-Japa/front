import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BackgroundContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  marginTop: "-64px",
  paddingTop: "64px",
  backgroundImage:
    theme.palette.mode === "dark"
      ? 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/background/Dashboard-Dark.jpg")'
      : 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url("/assets/images/background/Dashboard-Light.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  position: "relative",
}));
