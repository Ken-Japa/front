import { styled } from "@mui/material";

export const EmbaixadorCard = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "32px",
  borderRadius: "8px",
  border: "1px solid rgba(13, 149, 249, 0.3)",
  color: "white",
  width: "100%",
  maxWidth: "400px",

  "& .card-title": {
    fontSize: "1.5rem",
    marginBottom: "16px",
    textAlign: "center",
  },

  "& .card-price": {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "8px",
    textAlign: "center",
  },

  "& .card-period": {
    opacity: 0.75,
    marginBottom: "24px",
    textAlign: "center",
  },

  "& .benefits-list": {
    marginBottom: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  "& .benefit-item": {
    display: "flex",
    alignItems: "center",
    gap: "8px",

    "& .icon": {
      color: "#0D95F9",
    }
  }
}));

export const Description = styled("p")(({ theme }) => ({
  color: "white",
  textAlign: "center",
  maxWidth: "800px",
  marginBottom: "32px",
  lineHeight: 1.6,
}));