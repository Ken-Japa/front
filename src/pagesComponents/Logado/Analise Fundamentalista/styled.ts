import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
import { transitions } from "@/theme/variables";

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
    transition: transitions.medium,
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  padding: theme.spacing(4, 0),
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  backdropFilter: "blur(5px)",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  border: `1px solid ${theme.palette.divider}`,
  transition: transitions.medium,
  "& .MuiInputBase-root": {
    backgroundColor: theme.palette.mode === "dark" 
      ? 'rgba(26, 34, 52, 0.7)' 
      : 'rgba(255, 255, 255, 0.7)'
  }
}));

export const PageTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));
