import { styled, IconButton } from "@mui/material";
import { visitorColors } from "@/theme/palette/visitor";
import { spacing, borderRadius, transitions } from "@/theme/variables";

export const RegisterPageContainer = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: 1300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  "& .background-image": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },

  "& .content": {
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: spacing.md,
    backgroundColor: visitorColors.backgroundOverlay,
    backdropFilter: visitorColors.blur,
    minHeight: "100vh",
    overflowY: "auto",
    
    // Estilização da barra de rolagem
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: `${visitorColors.backgroundDark}33`,
      borderRadius: borderRadius.md,
    },
    "&::-webkit-scrollbar-thumb": {
      background: `${visitorColors.primary}66`,
      borderRadius: borderRadius.md,
      transition: transitions.medium,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: visitorColors.primary,
    },
  },
});

export const StyledCloseButton = styled(IconButton)({
  position: "fixed",
  top: spacing.md,
  right: spacing.md,
  color: visitorColors.text,
  backgroundColor: `${visitorColors.backgroundDark}80`,
  backdropFilter: visitorColors.blur,
  transition: transitions.medium,
  zIndex: 10,

  "&:hover": {
    backgroundColor: visitorColors.backgroundDark,
    color: visitorColors.primary,
  },
});
