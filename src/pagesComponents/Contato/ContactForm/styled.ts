import { styled } from "@mui/material";

export const ContactFormStyled = styled("form")(({ theme }) => ({
  flex: "1 1 auto",
  maxWidth: "600px",

  "& .MuiTextField-root": {
    marginBottom: "16px",
    width: "100%",

    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "4px",
    },
  },

  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.23)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#0D95F9",
    },
  },

  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-focused": {
      color: "#0D95F9",
    },
  },

  "& .submit-button": {
    marginTop: "24px",
    backgroundColor: "#0D95F9",
    color: "white",
    "&:hover": {
      backgroundColor: "#0D85E9",
    },
  },
}));
