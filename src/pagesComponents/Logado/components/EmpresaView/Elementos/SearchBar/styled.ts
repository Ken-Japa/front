import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SearchContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "320px",
  margin: "0 auto",
  "& .MuiAutocomplete-root": {
    width: "100%",
  },
  "& .MuiInputBase-root": {
    borderRadius: theme.shape.borderRadius,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.09)"
        : "rgba(0, 0, 0, 0.04)",
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.13)"
          : "rgba(0, 0, 0, 0.07)",
    },
    "&.Mui-focused": {
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.09)"
          : theme.palette.background.paper,
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-input": {
    padding: "10px 14px",
    height: "1.4375em",
  },
}));
