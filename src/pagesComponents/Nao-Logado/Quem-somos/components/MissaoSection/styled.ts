import { styled } from "@mui/material";

export const MissaoContainer = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  padding: "32px",
  borderRadius: "8px",
  backdropFilter: "blur(4px)",
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.07)",
  },

  "& p": {
    color: "white",
    marginTop: "16px",
    marginBottom: "32px",
    lineHeight: 1.7,

    "&:last-child": {
      marginBottom: 0,
    }
  },

  [theme.breakpoints.down("sm")]: {
    padding: "24px",
  }
}));

export const Subtitle = styled("p")({
  color: "rgba(255, 255, 255, 0.8)",
  marginBottom: "32px",
});