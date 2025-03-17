import { styled } from "@mui/material";

export const LoginFormStyled = styled("form")({
    position: "relative",
    width: "100%",
    maxWidth: "400px",
    padding: "40px",
    margin: "0 auto",
    "& .divider-container": {
        display: "flex",
        alignItems: "center",
        margin: "32px 0",
        "& .divider": {
            flex: 1,
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        },
        "& .divider-text": {
            margin: "0 16px",
            color: "rgba(255, 255, 255, 0.7)",
        },
    },
    "& .login-text": {
        marginTop: "32px",
        fontFamily: '"Roboto Mono", monospace',
        letterSpacing: "0.5px",
    },
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