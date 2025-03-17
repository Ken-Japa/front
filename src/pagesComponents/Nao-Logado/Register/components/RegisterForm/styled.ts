import { styled } from "@mui/material";

export const RegisterFormStyled = styled("form")(({ theme }) => ({
    position: "relative",
    width: "100%",
    maxWidth: "400px",
    padding: theme.spacing(4),
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2),
    },

    "& .divider-container": {
        display: "flex",
        alignItems: "center",
        margin: theme.spacing(3, 0),
        width: "100%",
        
        "& .divider": {
            flex: 1,
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        },
        "& .divider-text": {
            margin: theme.spacing(0, 2),
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "0.875rem",
        }
    },

    "& .login-text": {
        marginTop: theme.spacing(3),
        fontFamily: '"Roboto Mono", monospace',
        letterSpacing: "0.5px",
        textAlign: "center",
        width: "100%",
    }
}));