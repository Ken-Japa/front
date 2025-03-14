import { styled } from "@mui/material";

export const ContactFormStyled = styled("form")({
    width: "100%",
    maxWidth: "600px",
    padding: "40px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "8px",
    backdropFilter: "blur(10px)",
    "& .MuiTextField-root": {
        marginBottom: "16px",
    },
    "& .MuiOutlinedInput-root": {
        color: "white",
        "& fieldset": {
            borderColor: "rgba(255, 255, 255, 0.23)",
        },
        "&:hover fieldset": {
            borderColor: "rgba(255, 255, 255, 0.5)",
        },
    },
    "& .MuiInputLabel-root": {
        color: "rgba(255, 255, 255, 0.7)",
    },
});