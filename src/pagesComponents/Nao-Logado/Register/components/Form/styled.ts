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
    },
  },

  "& .MuiTextField-root": {
    width: "100%",
    marginBottom: theme.spacing(1),

    "& .MuiOutlinedInput-root": {
      color: "white",
      transition: "all 0.3s ease",

      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.23)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255, 0.5)",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      }
    },

    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.7)",
    },

    "& .MuiFormHelperText-root": {
      color: theme.palette.error.main,
      marginLeft: 0,
    }
  }
}));