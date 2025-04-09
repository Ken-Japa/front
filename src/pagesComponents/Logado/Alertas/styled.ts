import { styled } from "@mui/material/styles";
import { spacing } from "@/theme/variables";

export const BackgroundContainer = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  backgroundImage:
    theme.palette.mode === "dark"
      ? 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/assets/images/background/Alertas-Dark.jpg")'
      : 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("/assets/images/background/Alertas-Light.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  transition: "background-image 0.3s ease-in-out",
  padding: `${spacing.xl} 0`,
  marginTop: "-64px",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
  },

  [theme.breakpoints.down("sm")]: {
    padding: `${spacing.md} 0`,
  },
}));

export const PageHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: spacing.xl,

  "& h1": {
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
}));

export const ActionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: spacing.xl,
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: spacing.md,
  },
}));
