import { styled } from "@mui/material";
import { spacing, borderRadius, transitions } from "@/theme/variables";

// Cores fixas para a página de visitantes
const COLORS = {
  primary: "#0D95F9",
  secondary: "#8411CC",
  background: "rgba(255, 255, 255, 0.05)",
  backgroundHover: "rgba(255, 255, 255, 0.08)",
  text: "#FFFFFF",
  textSecondary: "rgba(255, 255, 255, 0.8)",
};

export const SectionTeam = styled("section")({
  minHeight: "100vh",
  width: "100%",
  position: "relative",

  "& .background-image": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },

  "& .opacity": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 0,
  },

  "& .content": {
    position: "relative",
    zIndex: 1,
  },
});

export const BaseSection = styled("section")(({ theme }) => ({
  maxWidth: "64rem",
  width: "100%",
  textAlign: "center",
  transform: "scale(1)",
  transition: transitions.medium,

  "&:hover": {
    transform: "scale(1.05)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: `0 ${spacing.md}`,
  },
}));

export const SectionTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.sm,
  marginBottom: spacing.md,
});

// Componente de container comum para seções com estilo similar
export const ContentContainer = styled("div")(({ theme }) => ({
  backgroundColor: COLORS.background,
  padding: spacing.xl,
  borderRadius: borderRadius.md,
  backdropFilter: "blur(4px)",
  transition: transitions.medium,

  "&:hover": {
    backgroundColor: COLORS.backgroundHover,
  },

  "& p": {
    color: COLORS.text,
    marginBottom: spacing.xl,
    lineHeight: 1.7,

    "&:last-child": {
      marginBottom: 0,
    },
  },

  [theme.breakpoints.down("sm")]: {
    padding: spacing.lg,
  },
}));

export const Subtitle = styled("p")({
  color: COLORS.textSecondary,
  marginBottom: spacing.xl,
});

// Exportar as cores para uso em outros componentes
export { COLORS };
