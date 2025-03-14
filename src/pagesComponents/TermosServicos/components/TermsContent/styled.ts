import { styled } from "@mui/material";

export const ContentContainer = styled("div")(({ theme }) => ({
  maxWidth: "1024px",
  width: "100%",
  margin: "0 auto",
  color: "rgba(255, 255, 255, 0.9)",

  "& .terms-section": {
    marginBottom: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    padding: "24px",
    borderRadius: "8px",
    backdropFilter: "blur(8px)",

    [theme.breakpoints.down("sm")]: {
      padding: "16px",
    }
  },

  "& .section-title": {
    fontSize: "1.5rem",
    color: "#0D95F9",
    marginBottom: "20px",
  },

  "& .warning-text": {
    color: theme.palette.warning.main,
  },

  "& p": {
    marginBottom: "20px",
    lineHeight: 1.6,
  },

  "& ul": {
    paddingLeft: "20px",
    marginBottom: "20px",
  },

  "& li": {
    marginBottom: "8px",
  }
}));