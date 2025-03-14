import { styled } from "@mui/material";

export const ValoresGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "32px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  }
}));

export const ValorCard = styled("div")(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "rgba(255, 255, 255, 0.06)",
  padding: "24px",
  borderRadius: "8px",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    transform: "scale(1.05)",
  },

  "& h3": {
    fontSize: "1.25rem",
    marginBottom: "8px",
    color: "#64FFDA",
  },

  "& p": {
    color: "white",
  }
}));