import { styled } from "@mui/material";

export const SectionContact = styled("section")({
  minHeight: "100vh",
  width: "100%",
  position: "relative",

  "& .background-image": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  },

  "& .content-wrapper": {
    position: "relative",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    padding: "64px 24px",
    color: "#fff",
  },

  "& .content-container": {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
  },

  "& .form-container": {
    gap: "48px",
    alignItems: "flex-start",

    "@media (max-width: 900px)": {
      gap: "32px",
    },
  },

  "& .title": {
    color: "#fff",
  },

  "& .subtitle": {
    color: "rgba(255, 255, 255, 0.9) !important",
  },
});

export const ContactForm = styled("form")({
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
    color: "#fff",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.23)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(255, 255, 255, 0.7)",
    },
  },

  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-focused": {
      color: "rgba(255, 255, 255, 0.9)",
    },
  },

  // Force light text color for input
  "& .MuiInputBase-input": {
    color: "#fff !important",
  },

  // Force light placeholder color
  "& .MuiInputBase-input::placeholder": {
    color: "rgba(255, 255, 255, 0.5) !important",
    opacity: 1,
  },
});
