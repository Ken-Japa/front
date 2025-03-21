import { Grid, Typography, styled } from "@mui/material";

export const SectionTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

export const FormContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'transparent',
  borderRadius: theme.shape.borderRadius,
  "& .MuiInputBase-root": {
    backgroundColor: 'transparent'
  }
}));

export const SectionContainer = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  "&:last-child": {
    marginBottom: 0,
  },
}));

export const FieldContainer = styled(Grid)(({ theme }) => ({
  "& .MuiFormControl-root": {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
