import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

export const BackgroundContainer = styled(Box)(({ theme }) => ({
  backgroundImage:
    theme.palette.mode === "dark"
      ? "url(/assets/images/background/Fundamentalista-Dark.jpg)"
      : "url(/assets/images/background/Fundamentalista-Light.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  position: "relative",
  marginTop: "-64px",
  paddingTop: "64px",
  paddingBottom: "64px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(0, 0, 0, 0.6)"
        : "rgba(255, 255, 255, 0.4)",
    zIndex: 1,
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  py: 4,
  position: "relative",
  zIndex: 2,
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  backdropFilter: "blur(5px)",
  borderRadius: "8px",
  boxShadow: "none",
  border: `1px solid ${theme.palette.divider}`,
  "& .MuiInputBase-root": {
    backgroundColor: 'transparent'
  }
}));
