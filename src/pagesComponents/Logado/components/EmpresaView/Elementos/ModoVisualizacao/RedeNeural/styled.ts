import { styled } from "@mui/material/styles";

export const GraphContainer = styled("div")(({ theme }) => ({
  flex: 1,
  height: "calc(100vh - 64px)",
  minHeight: "calc(100vh - 64px)",
  width: "100%",
  background:
    theme.palette.mode === "dark"
      ? "rgba(18, 18, 18, 0.95)" // Slightly lighter than pure black
      : "rgba(90, 90, 90, 0.85)", // Light gray instead of white
  borderRadius: "12px",
  backdropFilter: "blur(10px)",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 4px 24px rgba(0, 0, 0, 0.4)"
      : "0 4px 24px rgba(0, 0, 0, 0.1)",
  "& .vis-network": {
    outline: "none",
    height: "100% !important",
  },
}));
