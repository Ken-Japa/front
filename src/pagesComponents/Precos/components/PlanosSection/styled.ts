import { styled } from "@mui/material";

export const PlanosGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "32px",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  }
}));

export const PlanoCard = styled("div")(({ theme }) => ({
  padding: "32px",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  borderRadius: "8px",
  border: "1px solid rgba(13, 149, 249, 0.3)",
  color: "white",
  transition: "transform 0.3s ease",

  "&:hover": {
    transform: "translateY(-4px)",
  },

  "& .plano-tipo": {
    fontSize: "1.5rem",
    marginBottom: "16px",
  },

  "& .plano-preco": {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "8px",
  },

  "& .plano-periodo": {
    opacity: 0.75,
    marginBottom: "8px",
  },

  "& .plano-desconto": {
    color: "#00E676",
    marginBottom: "24px",
  }
}));