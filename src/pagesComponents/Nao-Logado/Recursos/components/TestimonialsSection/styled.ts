import { styled } from "@mui/material";

export const TestimonialCard = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  padding: "24px",
  borderRadius: "8px",
  backdropFilter: "blur(4px)",
  transition: "all 0.3s ease",
  height: "100%",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.09)",
  },

  "& .testimonial-text": {
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "16px",
    fontStyle: "italic",
  },

  "& .testimonial-author": {
    color: "#0D95F9",
    fontWeight: "bold",
  },

  "& .testimonial-role": {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.875rem",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "16px",
  }
}));