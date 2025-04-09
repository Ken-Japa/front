import { styled } from '@mui/material/styles';
import { Box, TableFooter as MuiTableFooter, TableCell, TableRow, Accordion as MuiAccordion } from '@mui/material';
import { spacing, borderRadius, transitions } from "@/theme/variables";

export const PositionsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: spacing.md,
}));

export const PositionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: spacing.md,
  width: "100%",
}));

export const ActionButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: spacing.md,
}));

export const Accordion = styled(MuiAccordion)(({ theme }) => ({
  marginBottom: spacing.md,
  borderRadius: borderRadius.md,
  overflow: "hidden",
  boxShadow: theme.shadows[1],
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionSummary-root": {
    backgroundColor: theme.palette.mode === "dark" 
      ? "rgba(255, 255, 255, 0.05)" 
      : "rgba(0, 0, 0, 0.02)",
  },
}));

export const TableFooter = styled(MuiTableFooter)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" 
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(0, 0, 0, 0.02)",
  "& .MuiTableCell-root": {
    fontWeight: 600,
  },
}));

export const TotalRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" 
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(0, 0, 0, 0.02)",
}));

export const TotalCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const ValueCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 500,
}));

export const EditButton = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  transition: transitions.medium,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));