import { styled } from "@mui/material";

export const FAQContainer = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto",

  "& .faq-item": {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "24px",
    borderRadius: "8px",
    border: "1px solid rgba(13, 149, 249, 0.3)",
    marginBottom: "16px",

    "&:last-child": {
      marginBottom: 0,
    },

    "& .question": {
      color: "#0D95F9",
      marginBottom: "8px",
      fontSize: "1.1rem",
    },

    "& .answer": {
      color: "white",
    }
  }
}));