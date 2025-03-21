import { Grid, Typography, styled } from "@mui/material";

export const CategoryContainer = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

export const MetricsGrid = styled(Grid)({
  display: "flex",
  flexWrap: "wrap",
});

export const UnitText = styled("span")(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginLeft: "2px",
  fontSize: "0.9em",
}));

export const FormulaText = styled("span")(({ theme }) => ({
  color: theme.palette.info.light,
  display: "block",
  marginTop: theme.spacing(1),
}));
