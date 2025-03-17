import { styled } from "@mui/material";

export const TestimonialCard = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  padding: "24px",
  borderRadius: "8px",
  border: "1px solid rgba(13, 149, 249, 0.4)",

  "& .testimonial-text": {
    color: "rgba(255, 255, 255, 0.95)",
    marginBottom: "16px",
    fontStyle: "italic",
  },

  "& .divider": {
    height: "1px",
    backgroundColor: "rgba(13, 149, 249, 0.3)",
    margin: "16px 0",
  },

  "& .testimonial-author": {
    color: "#0D95F9",
    marginBottom: "4px",
  },

  "& .testimonial-role": {
    color: "rgba(255, 255, 255, 0.85)",
    fontSize: "0.875rem",
  },
}));

export const TestimonialsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "32px",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));
