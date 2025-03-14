import { styled } from "@mui/material";

export const JoinTeamForm = styled("form")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  "& .form-container": {
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    padding: "32px",
    borderRadius: "8px",
    backdropFilter: "blur(10px)",

    [theme.breakpoints.down('sm')]: {
      padding: "24px 16px",
    }
  },

  "& .MuiTextField-root": {
    marginBottom: "16px",
    
    "& .MuiOutlinedInput-root": {
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.23)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255, 0.5)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0D95F9",
      }
    },

    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.7)",
      "&.Mui-focused": {
        color: "#0D95F9",
      }
    },
  },

  "& .submit-button": {
    height: "56px",
    backgroundColor: "#0D95F9",
    "&:hover": {
      backgroundColor: "rgba(13, 149, 249, 0.8)",
    },
    "&:disabled": {
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      color: "rgba(255, 255, 255, 0.3)",
    }
  },

  "& .MuiSelect-select": {
    color: "white",
  },

  "& .menu-paper": {
    backgroundColor: "rgba(0, 21, 41, 0.98)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(13, 149, 249, 0.2)",
    
    "& .MuiMenuItem-root": {
      color: "white",
      "&:hover": {
        backgroundColor: "rgba(13, 149, 249, 0.35)",
      }
    }
  }
}));
