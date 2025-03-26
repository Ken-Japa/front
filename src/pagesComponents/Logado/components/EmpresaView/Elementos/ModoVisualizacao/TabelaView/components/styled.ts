import { styled } from "@mui/material/styles";
import { TableSortLabel, Table } from "@mui/material";

export const StyledTableSortLabel = styled(TableSortLabel)(({ theme }) => ({
  "&:hover": {
    opacity: 0.8,
  },
  "& .MuiTableSortLabel-icon": {
    opacity: 0.5,
  },
}));

export const StyledTable = styled(Table)(({ theme }) => ({
  width: "100%",
  tableLayout: "fixed",
  "& .MuiTableCell-root": {
    boxShadow: "none",
  },
}));
