import { styled } from "@mui/material";

export const CTAContainer = styled("section")(({ theme }) => ({
  width: "100vw",
  position: "relative",
  padding: "120px 24px", 
  marginLeft: "calc(-50vw + 50%)",
  marginRight: "calc(-50vw + 50%)",
  backgroundColor: "rgba(13, 149, 249, 0.1)",
  backdropFilter: "blur(4px)",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    padding: "80px 16px", 
  }
}));
