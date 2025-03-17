import { styled } from "@mui/material";

export const VantagemCard = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: "24px",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  borderRadius: "8px",
  color: "white",

  "& .title": {
    fontSize: "1.25rem",
    marginBottom: "16px",
    color: "#0D95F9",
  },

  "& .description": {
    color: "rgba(255, 255, 255, 0.95)",
  }
}));

export const VantagensGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "32px",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  }
}));