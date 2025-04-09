import { Components } from "@mui/material";
import { muiButton } from "./muiButton";
import { muiTable } from "./muiTable";
import { muiPaper } from "./muiPaper";
import { muiCard } from "./muiCard";
import {
  muiAccordion,
  muiAccordionSummary,
  muiAccordionDetails,
} from "./muiAccordion";

export const components: Components = {
  MuiButton: muiButton,
  MuiTable: muiTable,
  MuiPaper: muiPaper,
  MuiCard: muiCard,
  MuiAccordion: muiAccordion,
  MuiAccordionSummary: muiAccordionSummary,
  MuiAccordionDetails: muiAccordionDetails,
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(128, 128, 128, 0.5)",
          borderRadius: "4px",
        },
      },
    },
  },
};
