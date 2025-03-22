import { Typography, styled } from "@mui/material";

export const SectionContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    fontWeight: 600,
    color: theme.palette.text.primary,
}));