import {
  Box,
  LinearProgress,
  TextField,
  Typography,
  styled,
} from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
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
    },
  },

  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
  },

  "& .MuiFormHelperText-root": {
    color: theme.palette.error.main,
    marginLeft: 0,
  },
}));

export const PasswordStrengthContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  marginTop: theme.spacing(1),
}));

export const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  width: "100%",
}));

export const StrengthText = styled(Typography)({
  color: "white",
  opacity: 0.9,
  textAlign: "left",
});
