import { styled } from "@mui/material/styles";
import { Box, Accordion } from "@mui/material";

export const CustomAccordion = styled(Accordion)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundColor: theme.palette.mode === 'dark' 
    ? "rgba(255, 255, 255, 0.05)" 
    : theme.palette.background.paper,
  color: theme.palette.mode === 'dark' 
    ? "white" 
    : theme.palette.text.primary,
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionSummary-root": {
    borderBottom: `1px solid ${theme.palette.mode === 'dark' 
      ? "rgba(255, 255, 255, 0.1)" 
      : theme.palette.divider}`,
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.mode === 'dark' 
      ? "white" 
      : theme.palette.text.primary,
  },
}));

export const ItemList = styled(Box, {
  shouldForwardProp: (prop) => prop !== "component",
})<{ component?: React.ElementType }>(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  marginTop: theme.spacing(1),
  "& li": {
    marginBottom: theme.spacing(0.5),
    lineHeight: 1.6,
    color: theme.palette.mode === 'dark' 
      ? "white" 
      : theme.palette.text.primary,
    "&::marker": {
      color: theme.palette.mode === 'dark' 
        ? theme.palette.primary.light 
        : theme.palette.primary.main,
    },
  },
}));
