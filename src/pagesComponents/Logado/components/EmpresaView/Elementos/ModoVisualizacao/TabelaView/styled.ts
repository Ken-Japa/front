import { styled } from "@mui/material/styles";
import { Box, Table as MuiTable } from "@mui/material";

export const TableContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  width: "100%",
  padding: theme.spacing(2),
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.85)"
      : "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(10px)",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "none",
  "& .MuiTable-root": {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  "& .MuiCollapse-root": {
    boxShadow: "none",
  },
  "& .MuiTableHead-root": {
    "& .MuiTableCell-root": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(0, 0, 0, 0.02)",
      fontWeight: 600,
    },
  },
  "& .MuiTableCell-root": {
    borderColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)",
  },
  "& .MuiTableRow-root:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.02)",
  },
  "& .MuiTableSortLabel-root:hover": {
    color: theme.palette.primary.main,
  },
  "& .MuiTableSortLabel-root.Mui-active": {
    color: theme.palette.primary.main,
  },
}));

export const StyledTable = styled(MuiTable)({
  tableLayout: "fixed",
  width: "100%",
});
