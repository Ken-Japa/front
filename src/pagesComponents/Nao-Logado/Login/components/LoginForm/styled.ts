import { styled } from "@mui/material";

export const LoginFormStyled = styled("form")(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "400px",
  padding: "40px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    padding: "24px 16px",
    maxWidth: "100%",
  },

  "& .form-header": {
    marginBottom: theme.spacing(4),
    width: "100%",
    textAlign: "center",
  },

  "& .divider-container": {
    display: "flex",
    alignItems: "center",
    margin: "32px 0",
    width: "100%",

    "& .divider": {
      flex: 1,
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    },

    "& .divider-text": {
      margin: "0 16px",
      color: "rgba(255, 255, 255, 0.7)",
    },
  },

  "& .MuiTextField-root": {
    marginBottom: theme.spacing(2),
    width: "100%",

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
  },

  "& .login-text": {
    marginTop: theme.spacing(4),
    fontFamily: '"Roboto Mono", monospace',
    letterSpacing: "0.5px",
    textAlign: "center",
  }
}));

export const ForgotPasswordLink = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'right',
  marginBottom: theme.spacing(1),
  
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'opacity 0.3s ease',
    
    '&:hover': {
      opacity: 0.8,
      textDecoration: 'underline',
    }
  }
}));

export const RememberMeContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: '16px',
});