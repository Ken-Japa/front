import { styled } from "@mui/material";

export const NewsletterContainer = styled("div")(({ theme }) => ({
  width: "100vw",
  marginLeft: "calc(-50vw + 50%)",
  marginRight: "calc(-50vw + 50%)",
  padding: "120px 24px",
  backgroundColor: "rgba(13, 149, 249, 0.1)",
  backdropFilter: "blur(4px)",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    padding: "80px 16px",
  },
}));

export const NewsletterForm = styled("form")(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
  padding: "0 16px",

  [theme.breakpoints.down("sm")]: {
    "& .MuiStack-root": {
      flexDirection: "column",
      gap: "16px",
    },
    "& button": {
      width: "100%",
    },
  },

  "& input": {
    flex: 1,
    padding: "12px 16px",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "white",
    width: "100%",
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.5)",
    },
    "&:focus": {
      outline: "none",
      borderColor: "#0D95F9",
    },
  },

  "& button": {
    padding: "12px 24px",
    borderRadius: "8px",
    backgroundColor: "#0D95F9",
    color: "white",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgba(13, 149, 249, 0.9)",
    },
  },
}));
