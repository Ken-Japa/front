import { styled } from "@mui/material/styles";
import { Box, Card, Chip, CircularProgress } from "@mui/material";
import { transitions } from "@/theme/variables";

export const CardContainer = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.mode === "dark" 
    ? "rgba(35, 45, 65, 0.95)" // Fundo mais escuro para o modo dark
    : theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[4],
  transition: transitions.medium,
  position: "relative",
  zIndex: 5,
  "&:hover": {
    boxShadow: theme.shadows[8],
    transform: "translateY(-2px)",
    backgroundColor: theme.palette.mode === "dark" 
      ? "rgba(40, 50, 70, 0.98)" // Ligeiramente mais claro no hover
      : theme.palette.background.paper,
  }
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: theme.spacing(2),
}));

export const CodesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

export const CodeChip = styled(Chip)(({ theme }) => ({
  height: "auto",
  backgroundColor: theme.palette.mode === "dark" 
    ? "rgba(55, 65, 85, 0.95)" // Fundo mais claro para os chips
    : "rgba(240, 245, 250, 0.9)",
  border: `1px solid ${theme.palette.divider}`,
  transition: transitions.medium,
  "& .MuiChip-label": {
    display: "flex",
    padding: theme.spacing(0.5, 1),
  },
}));

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  width: "100%",
  height: "200px",
}));

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const CompanyName = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  transition: transitions.medium,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const CardsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  position: "relative", // Importante para o contexto de z-index
  zIndex: 4, // Valor alto para garantir que fique acima de overlays da página
}));
