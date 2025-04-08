import { styled } from "@mui/material/styles";
import { Box, Typography, ToggleButton } from "@mui/material";

export const CodigosContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  borderTop: `1px solid ${theme.palette.mode === 'dark' 
    ? "rgba(255, 255, 255, 0.1)" 
    : theme.palette.divider}`,
  backgroundColor: theme.palette.mode === 'dark' 
    ? "rgba(0, 0, 0, 0.2)" 
    : "rgba(0, 0, 0, 0.03)",
  borderRadius: theme.shape.borderRadius,
}));

export const CodigosTitulo = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  textAlign: "center",
  fontWeight: "bold",
  color: theme.palette.mode === 'dark' 
    ? theme.palette.primary.light 
    : theme.palette.primary.main,
}));

export const CodigoButton = styled(ToggleButton)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1.5, 0),
  justifyContent: "center",
  fontWeight: "normal",
  backgroundColor: theme.palette.mode === 'dark' 
    ? "rgba(255, 255, 255, 0.05)" 
    : theme.palette.background.paper,
  color: theme.palette.mode === 'dark' 
    ? theme.palette.text.primary 
    : theme.palette.text.primary,
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? "rgba(255, 255, 255, 0.1)" 
    : theme.palette.divider}`,
  borderRadius: "8px",
  transition: "all 0.2s ease",
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontWeight: "bold",
  },
  "&:hover": {
    backgroundColor: (props: { selected?: boolean }) =>
      props.selected 
        ? theme.palette.primary.dark 
        : theme.palette.mode === 'dark' 
          ? "rgba(255, 255, 255, 0.1)" 
          : "rgba(0, 0, 0, 0.05)",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
}));
